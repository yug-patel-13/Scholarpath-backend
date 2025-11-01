import { Repository } from 'typeorm';
import { FormFillRequest } from './entities/form-fill-request.entity';
import { CreateFormFillRequestDto } from './dto/create-form-fill-request.dto';
import { UpdateFormFillRequestDto } from './dto/update-form-fill-request.dto';
export declare class FormFillRequestsService {
    private formFillRequestRepository;
    constructor(formFillRequestRepository: Repository<FormFillRequest>);
    create(createFormFillRequestDto: CreateFormFillRequestDto): Promise<FormFillRequest>;
    findAll(): Promise<FormFillRequest[]>;
    findByUserId(userId: number): Promise<FormFillRequest[]>;
    findOne(id: number): Promise<FormFillRequest | null>;
    update(id: number, updateFormFillRequestDto: UpdateFormFillRequestDto): Promise<FormFillRequest>;
    remove(id: number): Promise<void>;
}
