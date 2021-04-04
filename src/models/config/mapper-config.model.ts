import { MapperConfigBehavior } from './mapper-config-behavior.model';

/**
 * Part of the GeneseConfig relative to the @genese/mapper options
 */
export class MapperConfig {
    behavior?: MapperConfigBehavior = new MapperConfigBehavior();
    include?: string[] = [];
    tsConfigs?: string[] = [];
}
