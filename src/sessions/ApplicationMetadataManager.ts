import { Config } from '../orchestration/Orchestration';

export class ApplicationMetadataManager {
    private attributes: object | undefined;

    constructor(config: Config) {
        this.attributes = config.applicationMetadata;
    }

    public getAttributes(): object | undefined {
        return this.attributes;
    }
}
