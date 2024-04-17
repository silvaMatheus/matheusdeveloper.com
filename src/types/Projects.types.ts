export interface ContentProps {
    date?: Date;

    title: string;
    subtitle?: string;
    link?: string;
    backgroundImage: string;
    tags?: string[];
}

export interface ProjectDetails {
    name: string;
    id: string;
    segment: string;
    description: string;
    bigImage: string;
    developedBy: string;
    location: string;
    aboutProject: string;
    technologiesUsed: string[];
    smallImages: string[];
    anotherBigImage: string;
}
