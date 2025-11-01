import { CreateFormFillRequestDto } from './create-form-fill-request.dto';
import { RequestStatus } from '../entities/form-fill-request.entity';
declare const UpdateFormFillRequestDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFormFillRequestDto>>;
export declare class UpdateFormFillRequestDto extends UpdateFormFillRequestDto_base {
    status?: RequestStatus;
    adminNotes?: string;
}
export {};
