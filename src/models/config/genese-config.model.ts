import { MapperConfig } from './mapper-config.model';
import { AngularConfig } from './angular-config.model';
import { ApiConfig } from './api-config.model';

/**
 * Model of the config file for the user
 */
export class GeneseConfig {
    angular?: AngularConfig;
    api?: ApiConfig;
    mapper?: MapperConfig;
}
