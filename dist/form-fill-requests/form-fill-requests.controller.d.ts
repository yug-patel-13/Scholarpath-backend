import { FormFillRequestsService } from './form-fill-requests.service';
import { CreateFormFillRequestDto } from './dto/create-form-fill-request.dto';
import { UpdateFormFillRequestDto } from './dto/update-form-fill-request.dto';
export declare class FormFillRequestsController {
    private readonly formFillRequestsService;
    constructor(formFillRequestsService: FormFillRequestsService);
    create(createFormFillRequestDto: CreateFormFillRequestDto): Promise<import("./entities/form-fill-request.entity").FormFillRequest>;
    findAll(): Promise<import("./entities/form-fill-request.entity").FormFillRequest[]>;
    findByUserId(userId: string): Promise<import("./entities/form-fill-request.entity").FormFillRequest[]>;
    findOne(id: string): Promise<import("./entities/form-fill-request.entity").FormFillRequest>;
    update(id: string, updateFormFillRequestDto: UpdateFormFillRequestDto): Promise<import("./entities/form-fill-request.entity").FormFillRequest>;
    remove(id: string): Promise<void>;
}
