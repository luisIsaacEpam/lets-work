
export interface Jobs {
    jobs: Job[];
}

export interface Job {
    enterprise:    string;
    salary:        number;
    address:       string;
    requiredLevel: string;
    description:   string;
    id?:            number;
}
