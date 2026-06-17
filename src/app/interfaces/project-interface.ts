export interface Technology {
    name: string;
    logo: string;
}


export interface ProjectInterface {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    previewImage: string;
    url: string;
    github: string;
    technologies: Technology[];
}
