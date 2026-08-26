import { TProject } from "../projects/project.type";

export const projects: TProject[] = [
    {
        title: "Site Preparation & Leveling",
        description: "Comprehensive earthmoving, leveling, and contouring on your lifestyle property.",
        imageUrl: "assets/project_siteprep.jpg",
        location: "Downtown Area"
    },
    {
        title: "Land Clearing & Mulching",
        description: "Efficient vegetation removal and mulching for lifestyle properties, subdivisions, and commercial sites.",
        imageUrl: "assets/project_landclearing.jpg",
        location: "Business District"
    },
    {
        title: "Dam Construction",
        description: "Wetland creation and silt pond cleanouts.",
        imageUrl: "assets/project_damconstruction.jpg",
        location: "Tech Park"
    },
    {
        title: "Residential Earthworks",
        description: "Groundworks and land shaping for new builds and residential subdivisions.",
        imageUrl: "assets/project_residentialearthworks.jpg",
        location: "Suburban Area"
    },
] as const satisfies TProject[];
