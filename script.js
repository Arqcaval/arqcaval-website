const translations = {
    es: {
        home: "Inicio",
        services: "Servicios",
        projects: "Proyectos",
        contact: "Contacto",
        welcome: "Bienvenido a Arqcaval LLC",
        description: "Especialistas en diseño residencial innovador y sostenible.",
        custom_design: "Diseño personalizado",
        energy_efficient: "Eficiencia energética",
        construction_advice: "Asesoría en construcción",
        projects_description: "Algunos de nuestros proyectos recientes.",
        contact_info: "Escríbenos para más información."
    },
    en: {
        home: "Home",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        welcome: "Welcome to Arqcaval LLC",
        description: "Specialists in innovative and sustainable residential design.",
        custom_design: "Custom Design",
        energy_efficient: "Energy Efficiency",
        construction_advice: "Construction Advisory",
        projects_description: "Some of our recent projects.",
        contact_info: "Write to us for more information."
    }
};

document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLang = this.value;
    document.querySelectorAll('.lang').forEach(el => {
        const key = el.getAttribute('data-key');
        el.textContent = translations[selectedLang][key];
    });
});
