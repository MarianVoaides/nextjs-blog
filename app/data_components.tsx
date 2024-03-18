import React from 'react'

let data_components = [
        {
          "name": "Intel i9 14th gen",
          "description": "Unleash the power of the latest generation Intel Core i9 processor. Experience unparalleled performance for gaming, content creation, and productivity tasks.",
          "imageUrl": "/i9-14k.jpg"
        },
        {
          "name": "AMD Ryzen 7 58003xd",
          "description": "Meet the ultimate multi-tasking processor - AMD Ryzen 7 58003xd. With lightning-fast speeds and efficient performance, tackle anything from gaming to heavy workloads with ease.",
          "imageUrl": "/ryzen7.jpg"
        },
        {
          "name": "Intel i7 14th gen",
          "description": "Experience exceptional speed and responsiveness with the Intel Core i7 processor. Whether you're gaming or working, this processor delivers unmatched performance.",
          "imageUrl": "/i7-14k.jpg"
        },
        {
          "name": "AMD Ryzen 9 78003xd",
          "description": "Elevate your computing experience with AMD Ryzen 9 78003xd. Dominate every task with lightning-fast speeds, unparalleled performance, and seamless multitasking capabilities.",
          "imageUrl": "/ryzen9.jpg"
        },
        {
          "name": "AMD Radeon 7900xt",
          "description": "Get ready for breathtaking graphics and unrivaled gaming performance with AMD Radeon 7900xt. Immerse yourself in ultra-smooth gameplay and stunning visuals.",
          "imageUrl": "/7900xt.jpg"
        },
        {
          "name": "Nvidia RTX 4070",
          "description": "Unlock the power of real-time ray tracing and AI-enhanced graphics with Nvidia RTX 4070. Experience next-level gaming performance and stunning visual effects.",
          "imageUrl": "/4070.jpg"
        },
        {
            "name": "ASUS ROG Strix X570-E Gaming",
            "description": "Experience unparalleled performance and reliability with the ASUS ROG Strix X570-E Gaming motherboard. Packed with advanced features and cutting-edge technology, it's the perfect choice for high-performance gaming and content creation.",
            "imageUrl": "/ASUS_motherboard.jpg"
        },
        {
            "name": "G.SKILL Trident Z Neo DDR4 RAM",
            "description": "Elevate your gaming experience with G.SKILL Trident Z Neo DDR4 RAM. Featuring stunning RGB lighting and ultra-fast speeds, this RAM is designed to deliver unmatched performance and reliability.",
            "imageUrl": "/trident_z_neo.jpg"
        },
        {
            "name": "MSI MAG B550 Tomahawk",
            "description": "Unlock the power of AMD Ryzen processors with the MSI MAG B550 Tomahawk motherboard. Built for gamers and enthusiasts, it offers exceptional performance, reliability, and expandability for your gaming rig.",
            "imageUrl": "/ASUS_motherboard.jpg"
        },
        {
            "name": "Corsair Vengeance RGB Pro DDR4 RAM",
            "description": "Enhance your gaming PC with Corsair Vengeance RGB Pro DDR4 RAM. Featuring stunning RGB lighting and high-speed performance, it's the perfect choice for gaming enthusiasts and overclockers.",
            "imageUrl": "/trident_z_neo.jpg"
        }
      ];

export function add(comp: any) {
    data_components.push(comp);
    console.log(data_components);
}

export function find_item(name: string){
    return data_components.find(comp => comp.name === name)
}

export default data_components