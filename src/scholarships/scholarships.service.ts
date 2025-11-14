import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scholarship } from './entities/scholarship.entity';
import { UserProfile } from '../user-profiles/entities/user-profile.entity';

@Injectable()
export class ScholarshipsService {
  constructor(
    @InjectRepository(Scholarship)
    private scholarshipRepository: Repository<Scholarship>,
  ) {}

  async findAll(): Promise<Scholarship[]> {
    return this.scholarshipRepository.find({
      where: { isActive: true },
      relations: ['category'],
    });
  }

  async findOne(id: number): Promise<Scholarship | null> {
    return this.scholarshipRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  async findByCategory(categoryId: number): Promise<Scholarship[]> {
    return this.scholarshipRepository.find({
      where: { categoryId, isActive: true },
      relations: ['category'],
    });
  }

  async findEligible(profile: UserProfile): Promise<Scholarship[]> {
    const allScholarships = await this.findAll();
    const eligible: Scholarship[] = [];

    for (const scholarship of allScholarships) {
      try {
        if (this.checkEligibility(scholarship, profile)) {
          eligible.push(scholarship);
        }
      } catch (error) {
        // Log error but continue checking other scholarships
        console.error(`Error checking eligibility for scholarship ${scholarship.id} (${scholarship.title}):`, error);
      }
    }

    return eligible;
  }

  private checkEligibility(scholarship: Scholarship, profile: UserProfile): boolean {
    const rules = scholarship.eligibilityRules;
    if (!rules) {
      // If no rules, check only category match
      if (scholarship.applicableFor !== 'all' && scholarship.applicableFor !== profile.category) {
        return false;
      }
      return true;
    }

    // Check applicable category - MUST match
    if (scholarship.applicableFor !== 'all' && scholarship.applicableFor !== profile.category) {
      return false;
    }

    // Check state - strict matching (case-insensitive, handle common variations)
    if (scholarship.states !== 'all') {
      const allowedStates = scholarship.states.split(',').map(s => s.trim().toLowerCase());
      const profileState = profile.state?.toLowerCase().trim();
      if (!profileState) {
        return false; // State is required but not provided
      }
      // Normalize state names for better matching (handle common abbreviations/variations)
      const stateNormalizations: { [key: string]: string[] } = {
        'gujarat': ['gujarat', 'guj', 'gj'],
        'maharashtra': ['maharashtra', 'maha', 'mh'],
        'rajasthan': ['rajasthan', 'raj', 'rj'],
        'karnataka': ['karnataka', 'kar', 'ka'],
        'tamil nadu': ['tamil nadu', 'tamilnadu', 'tn'],
        'west bengal': ['west bengal', 'westbengal', 'wb'],
        'andhra pradesh': ['andhra pradesh', 'andhrapradesh', 'ap'],
        'uttar pradesh': ['uttar pradesh', 'uttarpradesh', 'up'],
      };
      
      // Check if profile state matches any allowed state (with normalization)
      let stateMatched = allowedStates.includes(profileState);
      if (!stateMatched) {
        // Try normalization
        for (const [normalized, variations] of Object.entries(stateNormalizations)) {
          if (allowedStates.includes(normalized) && variations.includes(profileState)) {
            stateMatched = true;
            break;
          }
        }
      }
      if (!stateMatched) {
        return false;
      }
    }

    // Check income - strict validation (use Number() for proper comparison)
    if (rules.maxIncome !== null && rules.maxIncome !== undefined) {
      const profileIncome = Number(profile.annualIncome);
      const maxIncome = Number(rules.maxIncome);
      if (!profileIncome || isNaN(profileIncome) || profileIncome > maxIncome) {
        return false;
      }
    }
    if (rules.minIncome !== null && rules.minIncome !== undefined) {
      const profileIncome = Number(profile.annualIncome);
      const minIncome = Number(rules.minIncome);
      if (!profileIncome || isNaN(profileIncome) || profileIncome < minIncome) {
        return false;
      }
    }

    // Check age - strict validation (use Number() for proper comparison)
    if (rules.maxAge !== null && rules.maxAge !== undefined) {
      const profileAge = profile.age !== null && profile.age !== undefined ? Number(profile.age) : null;
      const maxAge = Number(rules.maxAge);
      if (!profileAge || isNaN(profileAge) || profileAge > maxAge) {
        return false;
      }
    }
    if (rules.minAge !== null && rules.minAge !== undefined) {
      const profileAge = profile.age !== null && profile.age !== undefined ? Number(profile.age) : null;
      const minAge = Number(rules.minAge);
      if (!profileAge || isNaN(profileAge) || profileAge < minAge) {
        return false;
      }
    }

    // Check marks - strict validation (marks must meet minimum, use Number() for proper comparison)
    // For 10th marks: must be >= minimum if rule exists
    if (rules.minMarks10 !== null && rules.minMarks10 !== undefined) {
      const profileMarks10 = profile.marks10 !== null && profile.marks10 !== undefined ? Number(profile.marks10) : null;
      const minMarks10 = Number(rules.minMarks10);
      if (profileMarks10 === null || isNaN(profileMarks10) || profileMarks10 < minMarks10) {
        return false;
      }
    }
    // For 12th marks: must be >= minimum if rule exists
    if (rules.minMarks12 !== null && rules.minMarks12 !== undefined) {
      const profileMarks12 = profile.marks12 !== null && profile.marks12 !== undefined ? Number(profile.marks12) : null;
      const minMarks12 = Number(rules.minMarks12);
      if (profileMarks12 === null || isNaN(profileMarks12) || profileMarks12 < minMarks12) {
        return false;
      }
    }

    // Check caste - must match one of the allowed castes
    if (rules.caste && Array.isArray(rules.caste) && rules.caste.length > 0) {
      const profileCaste = profile.caste?.toLowerCase().trim();
      if (!profileCaste || !rules.caste.includes(profileCaste)) {
        return false;
      }
    }

    // Check gender - must match exactly
    if (rules.gender && rules.gender !== 'all') {
      const profileGender = profile.gender?.toLowerCase().trim();
      if (!profileGender || profileGender !== rules.gender.toLowerCase().trim()) {
        return false;
      }
    }

    // Check land size (for farmers) - must not exceed maximum (use Number() for proper comparison)
    if (rules.landSize !== null && rules.landSize !== undefined) {
      const profileLandSize = profile.landSize !== null && profile.landSize !== undefined ? Number(profile.landSize) : null;
      const maxLandSize = Number(rules.landSize);
      if (profileLandSize === null || isNaN(profileLandSize) || profileLandSize > maxLandSize) {
        return false;
      }
    }

    // Check farmer type - must match one of the allowed types
    if (rules.farmerType && Array.isArray(rules.farmerType) && rules.farmerType.length > 0) {
      if (!profile.farmerType) {
        return false;
      }
      const profileFarmerType = profile.farmerType.toLowerCase().trim();
      if (!rules.farmerType.includes(profileFarmerType)) {
        return false;
      }
    }

    // Check loan status - must match if specified
    if (rules.loanStatus && rules.loanStatus !== 'any') {
      if (!profile.loanStatus) {
        return false;
      }
      const profileLoanStatus = profile.loanStatus.toLowerCase().trim();
      if (profileLoanStatus !== rules.loanStatus.toLowerCase().trim()) {
        return false;
      }
    }

    // Check crop (if specified)
    if (rules.crop && Array.isArray(rules.crop) && rules.crop.length > 0) {
      if (!profile.crop) {
        return false;
      }
      const profileCrop = profile.crop.toLowerCase().trim();
      if (!rules.crop.includes(profileCrop)) {
        return false;
      }
    }

    // Check CMSS (Chief Minister Scholarship Scheme) Special Categories
    // CMSS requires at least one of the 7 special categories to be true
    if (rules.cmssCategories && Array.isArray(rules.cmssCategories) && rules.cmssCategories.length > 0) {
      const hasCMSSCategory = 
        (profile.lowLiteracyTaluka === true && rules.cmssCategories.includes('lowLiteracyTaluka')) ||
        (profile.childrenOfMartyrs === true && rules.cmssCategories.includes('childrenOfMartyrs')) ||
        (profile.shramikCard === true && rules.cmssCategories.includes('shramikCard')) ||
        (profile.disabilityCertificate === true && rules.cmssCategories.includes('disabilityCertificate')) ||
        (profile.widowCertificate === true && rules.cmssCategories.includes('widowCertificate')) ||
        (profile.orphanCertificate === true && rules.cmssCategories.includes('orphanCertificate')) ||
        (profile.tyaktaCertificate === true && rules.cmssCategories.includes('tyaktaCertificate'));

      // If CMSS categories are required, user must have at least one
      if (rules.requiresCMSSCategory === true && !hasCMSSCategory) {
        return false;
      }

      // If specific CMSS categories are listed, user must match at least one
      if (rules.cmssCategories.length > 0 && !hasCMSSCategory) {
        return false;
      }
    }

    // For CMSS scholarship specifically, check if user has any CMSS category
    // This is a special case: CMSS is available if user has ANY of the 7 categories
    // OR if they are SC/ST/OBC (which is already checked by caste)
    if (rules.requiresCMSSCategory === true) {
      const hasAnyCMSSCategory = 
        profile.lowLiteracyTaluka === true ||
        profile.childrenOfMartyrs === true ||
        profile.shramikCard === true ||
        profile.disabilityCertificate === true ||
        profile.widowCertificate === true ||
        profile.orphanCertificate === true ||
        profile.tyaktaCertificate === true;

      // For General category, CMSS requires at least one special category
      // For SC/ST/OBC, they can apply without special category (caste check already passed)
      if (profile.caste && ['general', 'ebc'].includes(profile.caste.toLowerCase())) {
        if (!hasAnyCMSSCategory) {
          return false;
        }
      }
      // For SC/ST/OBC, they can apply even without special category
    }

    return true;
  }
}

