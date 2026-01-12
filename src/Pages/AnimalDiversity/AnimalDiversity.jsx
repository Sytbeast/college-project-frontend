import React from "react";
import AnimalCard from "../../components/Cards/AnimalCard";

const AnimalDiversity = () => {
  const animals = [
    {
      title: "Porifera",
      scientific: "Pore-bearing animals",
      image: "porifera.jpg",
      description:
        "Porifera are simple multicellular animals commonly known as sponges. They lack true tissues and organs.",
      features: [
        "Aquatic (mostly marine)",
        "Body with pores (ostia)",
        "Asymmetrical body",
        "Cellular level of organization",
      ],
      examples: "Sycon, Spongilla",
    },
    {
      title: "Cnidaria",
      scientific: "Animals with stinging cells",
      image: "cnideria.jpeg",
      description:
        "Cnidarians possess specialized cells called cnidocytes used for defense and capturing prey.",
      features: [
        "Radial symmetry",
        "Diploblastic body",
        "Presence of tentacles",
        "Tissue-level organization",
      ],
      examples: "Hydra, Jellyfish, Corals",
    },
    {
      title: "Chordata",
      scientific: "Animals with notochord",
      image: "bird.jpg",
      description:
        "Chordates are advanced animals that possess a notochord at some stage of development.",
      features: [
        "Notochord present",
        "Dorsal hollow nerve cord",
        "Post-anal tail",
        "Bilateral symmetry",
      ],
      examples: "Fish, Frog, Birds, Humans",
    },

    {
      title: "Platyhelminthes",
      scientific: "Flat-bodied animals",
      image: "p-1.jpg",
      description:
        "Platyhelminthes are dorsoventrally flattened animals with bilateral symmetry. They are mostly parasitic and show a simple level of organization.",
      features: [
        "Bilateral symmetry",
        "Triploblastic body",
        "Acoelomate",
        "Incomplete digestive system",
        "Mostly parasitic",
      ],
      examples: "Planaria, Liver fluke, Tapeworm",
    },

    {
      title: "Nematoda",
      scientific: "Roundworms",
      image: "pinworm.jpg",
      description:
        "Nematodes are cylindrical and elongated worms with bilateral symmetry. They may be free-living or parasitic in nature.",
      features: [
        "Bilateral symmetry",
        "Triploblastic body",
        "Pseudocoelomate",
        "Complete digestive system",
        "Unsegmented body",
      ],
      examples: "Ascaris, Hookworm, Pinworm",
    },

    {
      title: "Annelida",
      scientific: "Segmented worms",
      image: "a-1.webp",
      description:
        "Annelids are worms with segmented bodies showing true coelom. They have a well-developed organ system.",
      features: [
        "Bilateral symmetry",
        "Triploblastic body",
        "True coelom",
        "Metameric segmentation",
        "Closed circulatory system",
      ],
      examples: "Earthworm, Leech, Nereis",
    },

    {
      title: "Arthropoda",
      scientific: "Joint-legged animals",
      image: "athropod.webp",
      description:
        "Arthropods form the largest animal phylum. They possess jointed appendages and a hard exoskeleton.",
      features: [
        "Bilateral symmetry",
        "Segmented body",
        "Jointed appendages",
        "Chitinous exoskeleton",
        "Open circulatory system",
      ],
      examples: "Cockroach, Butterfly, Crab",
    },

    {
      title: "Mollusca",
      scientific: "Soft-bodied animals",
      image: "snail2.jfif",
      description:
        "Molluscs have soft unsegmented bodies usually protected by a hard shell. They show a high level of organ-system organization.",
      features: [
        "Bilateral symmetry",
        "Triploblastic body",
        "True coelom",
        "Soft body with shell",
        "Muscular foot present",
      ],
      examples: "Snail, Octopus, Mussel",
    },

    {
      title: "Echinodermata",
      scientific: "Spiny-skinned animals",
      image: "echinoderm.jfif",
      description:
        "Echinoderms are exclusively marine animals with spiny skin and a unique water vascular system.",
      features: [
        "Radial symmetry (adults)",
        "Triploblastic body",
        "True coelom",
        "Water vascular system",
        "Endoskeleton present",
      ],
      examples: "Starfish, Sea urchin, Sea cucumber",
    },

    {
      title: "Hemichordata",
      scientific: "Half-chord animals",
      image: "hemichordata.jpg",
      description:
        "Hemichordates are marine animals showing characteristics of both chordates and non-chordates.",
      features: [
        "Bilateral symmetry",
        "Triploblastic body",
        "True coelom",
        "Body divided into proboscis, collar and trunk",
        "Open circulatory system",
      ],
      examples: "Balanoglossus",
    },





  ];

  return (
    <div>
      <div className="bg-green-700 text-white text-center py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Animal Diversity
        </h1>
        <p className="mt-3 text-base sm:text-lg max-w-2xl mx-auto">
          Classification, characteristics and examples of major animal groups
        </p>
      </div>

      <div className="
        max-w-7xl mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-16
        grid gap-8
        sm:grid-cols-2
        lg:grid-cols-3
      ">
        {animals.map((item, index) => (
          <AnimalCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AnimalDiversity;
