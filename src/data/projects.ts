import { ProjectDetails } from '@/types/Projects.types';

const projects: ProjectDetails[] = [
    {
        name: 'EcoTech Solutions',
        id: 'test',
        segment: 'Environmental Tech',
        description:
            'Quando se fala em startups, muitas pessoas associam imediatamente a ideias inovadoras, soluções tecnológicas e empreendedores visionários.',
        bigImage: '/images/ecotech-main.jpg',
        developedBy: 'Matheus Silva',
        location: 'São Paulo, BR',
        aboutProject:
            'Designer e diretor da Seifert Design com 4 anos de experiência em mídias sociais, marcas e interfaces digitals com um estilo de criação voltado a modernidade, tecnologia e minimalismo. </br> </br> Totalmente autodidata e apaixonado pelo mercado tecnológico e universo digital. Amante de um bom café e praticante do conceito essencialista na vida pessoal e profissional.',
        technologiesUsed: ['React', 'NextJS', 'TypeScript', 'NodeJS'],
        smallImages: ['/images/ecotech-1.jpg', '/images/ecotech-2.jpg'],
        anotherBigImage: '/images/ecotech-alternate.jpg',
    },
    {
        name: 'EcoTech Solutions',
        id: 'ecotech-solutions',
        segment: 'Environmental Tech',
        description:
            'EcoTech Solutions focuses on innovative technologies to promote sustainability and eco-friendly solutions.',
        bigImage: '/images/ecotech-main.jpg',
        developedBy: 'Matheus Silva',
        location: 'Berlin, Germany',
        aboutProject:
            'Designer e diretor da Seifert Design com 4 anos de experiência em mídias sociais, marcas e interfaces digitals com um estilo de criação voltado a modernidade, tecnologia e minimalismo. <br/> Totalmente autodidata e apaixonado pelo mercado tecnológico e universo digital. Amante de um bom café e praticante do conceito essencialista na vida pessoal e profissional.',

        technologiesUsed: ['React', 'NextJS', 'TypeScript', 'NodeJS'],
        smallImages: ['/images/ecotech-1.jpg', '/images/ecotech-2.jpg'],
        anotherBigImage: '/images/ecotech-alternate.jpg',
    },
];

export default projects;
