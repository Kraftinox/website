import { ConceptDesignIcon, ConsultingIcon, CorporateLawIcon, CreativeDirectionIcon, CriminalDefenceIcon, DataAnalyticsIcon, DataContentIcon, DiscoveryIcon, EmploymentLawIcon, EstatePlanningIcon, ImprovementIcon, InnovationIcon, OptimizationIcon, ResearchIcon, ServiceIcon, ServiceIconFour, ServiceIconThree, ServiceIconTwo, UIUXDesignIcon } from "@/svg";
import { AboutCreativeDirectionIcon, AboutDataAnalyticsIcon, AboutDataContentIcon, AboutUIUXDesignIcon } from "@/svg/ServiceIcons";
import { ServiceItemDt } from "@/types/custom-dt";

// Service data array
const servicesData: ServiceItemDt[] = [
    //home services data start
      {
        id: 1,
        icon: "/assets/img/icons/1.png",
        title: "Instalații termomecanice",
        description:
            "Execuția sistemelor de încălzire, răcire și abur pentru aplicații industriale.",
    },
    {
        id: 2,
        icon: "/assets/img/icons/2.png",
        title: "Instalații tehnologice",
        description:
            "Montajul sistemelor de proces pentru industria alimentară, farmaceutică și industrială.",
    },
    {
        id: 3,
        icon: "/assets/img/icons/3.png",
        title: "Instalații sub presiune",
        description:
            "Sisteme de abur, aer comprimat, gaze și apă la presiuni ridicate.",
    },
    {
        id: 4,
        icon: "/assets/img/icons/4.png",
        title: "Sudură industrială",
        description:
            "Sudură TIG și orbitală pentru țevi din inox, la standarde înalte de calitate.",
    },
    {
        id: 5,
        icon: "/assets/img/icons/5.png",
        title: "Sisteme de protecție la incendiu",
        description:
            "Instalare hidranți și sprinklere conform normelor de siguranță.",
    },
    {
        id: 6,
        icon: "/assets/img/icons/6.png",
        title: "Termoizolații și înveliri",
        description:
            "Soluții profesionale pentru eficiență energetică și protecția instalațiilor.",
    },
    {
        id: 7,
        icon: "/assets/img/icons/7.png",
        title: "Instalații gaze tehnice",
        description:
            "Sisteme pentru oxigen, hidrogen, argon, CO2 și alte gaze industriale.",
    },
    {
        id: 8,
        icon: "/assets/img/icons/8.png",
        title: "Sisteme CIP",
        description:
            "Sisteme de curățare industrială pentru aplicații igienice.",
    }
];

export default servicesData;