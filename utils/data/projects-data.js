import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Reg-Editor, Online Realtime Text Editor',
        description: 'Reg-editor is a robust online real-time text editor designed for collaborative code editing. Leveraging modern web technologies, it offers seamless real-time collaboration and a rich coding experience with JavaScript support',
        tools: ['Express', 'MongoDB','PM2', 'Nginx'],
        role: 'Backend Developer',
        code: 'https://github.com/iranjansharma',
        demo: 'http://103.174.242.29:5000/',
        image: crefin,
    },
    {
        id: 2,
        name: 'SEO Analyzer Chrome Extension',
        description: ' SEO Analyzer is a powerful Chrome Extension designed for on-page SEO auditing. Built with pure HTML5, CSS3, and JavaScript, Offers a comprehensive analysis of web pages, evaluating critical SEO factors such as keyword density, meta tags, headings, and content length.',
        tools: ['HTML',"CSS", "JavaScript",'Tailwind CSS',"Manifest V3 Chrome"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    }];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
