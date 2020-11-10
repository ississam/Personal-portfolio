function toggle(){
	var trailer = document.querySelector(".trailer")
	var video = document.querySelector("video")
	trailer.classList.toggle("active");
video.pause();
video.currentTime = 0;
}
const projectList = [
  {
    projectTitle: "Easy Leave",
    projectDescription: `Application web qui gére les congés du personnel des sociétés, l'employé fait une demande de congés, le responsable la traite.`,
    viewDemoLink: "https://issam-elyazri.com/easyleave.mp4",
    viewCodeLink: "https://github.com/ississam/gestionconges-font",
    tagLists: ["Restapi","React-js", "Laravel","Bootstrap","HTML"],
    coverImg:
    "https://issam-elyazri.com/assets/images/easyleave/1.jpg",
  },
  {
    projectTitle: "Gestion des cours Udemy",
    projectDescription: `Gestion des cours udemy, avec ajout, suggestion et suppression de ce cours.Cette application réalisé en mode Agile (methodologie SCRUM) avec Zakaria et Oussama, gére les cours UDEMY, avec la consommation de l'api de udemy et RESAPI en même temps`,
    viewDemoLink: "https://issam-elyazri.com/clone-udemy.mp4",
    viewCodeLink: "https://github.com/ississam/restapi-udemy",
    tagLists: ["Restapi","React-js", "Laravel","Bootstrap","HTML"],
    coverImg:
      "https://issam-elyazri.com/assets/images/udem.jpg",
  },
  {
    projectTitle: "Clone instagram",
    projectDescription: `Clone de l’application de partage d’images Instagram, avec les fonctionalités de post, fellow, recharche par mot clés, commentaire, creation de compte, poste des photos,....
    `,
    viewDemoLink: "https://issam-elyazri.com/clone_insta.mp4",
    viewCodeLink: "https://github.com/ississam/clone-instagram",
    tagLists: ["Laravel","Bootstrap","HTML","CSS","Javascript"],
    coverImg:
      "https://issam-elyazri.com/assets/images/cloneinsta/phot.png",
  },

  {
    projectTitle: "E-commerce",
    projectDescription: `Site  e-commerce, avec moyen de paiement en ligne sécurisé, gestion des stock et des coupons de promotion.`,
    viewDemoLink: "https://issam-elyazri.com/ecommerce.mp4",
    viewCodeLink: "https://github.com/ississam/ecommerce_laravel",
    tagLists: ["Laravel","Bootstrap","HTML","CSS","Javascript"],
    coverImg:
      "https://issam-elyazri.com/assets/images/ecommerce/1.png",
  },

  {
    projectTitle: "Blog Native",
    projectDescription: `Ce blog est un  journaul personnel où il est publié des articles utiles, avec la gestion des auteurs, des artices des commentaires.`,
    viewDemoLink: "https://issam-elyazri.com/blognative.mp4",
    viewCodeLink: "https://github.com/ississam/BlogNATIVE",
    tagLists: ["PHP","Bootstrap","HTML","CSS"],
    coverImg:
      "https://issam-elyazri.com/assets/images/Blog%20native/2.png",
  },
];

export default projectList;
