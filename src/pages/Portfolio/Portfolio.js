import React from 'react';
import Navbar from '../../components/Navbar';

const data = [
  {
    name: 'Project Name',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore fuga quia necessitatibus ex veritatis in libero officia illo non enim voluptas autem accusamus beatae laudantium temporibus aliquam corrupti aut placeat, doloremque maiores incidunt mollitia? Similique alias quasi aliquid consequuntur tenetur dolor, suscipit veniam aut, reprehenderit rem iusto minus earum, beatae assumenda itaque quisquam inventore nemo ipsam consectetur voluptatum blanditiis!',
    img: 'https://img.freepik.com/free-vector/desktop-computer-vconcept-illustration_114360-12153.jpg?w=2000',
    date: 1694791988,
    tag: 'cursus 42',
    link: 'https://github.com/DinoMalin/portfolio',
  },
  {
    name: 'Project Name',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore fuga quia necessitatibus ex veritatis in libero officia illo non enim voluptas autem accusamus beatae laudantium temporibus aliquam corrupti aut placeat, doloremque maiores incidunt mollitia? Similique alias quasi aliquid consequuntur tenetur dolor, suscipit veniam aut, reprehenderit rem iusto minus earum, beatae assumenda itaque quisquam inventore nemo ipsam consectetur voluptatum blanditiis!',
    img: 'https://img.freepik.com/free-vector/desktop-computer-vconcept-illustration_114360-12153.jpg?w=2000',
    date: 1694791988,
    tag: 'cursus 42',
    link: 'https://github.com/DinoMalin/portfolio',
  },
  {
    name: 'Project Name',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore fuga quia necessitatibus ex veritatis in libero officia illo non enim voluptas autem accusamus beatae laudantium temporibus aliquam corrupti aut placeat, doloremque maiores incidunt mollitia? Similique alias quasi aliquid consequuntur tenetur dolor, suscipit veniam aut, reprehenderit rem iusto minus earum, beatae assumenda itaque quisquam inventore nemo ipsam consectetur voluptatum blanditiis!',
    img: 'https://img.freepik.com/free-vector/desktop-computer-vconcept-illustration_114360-12153.jpg?w=2000',
    date: 1694791988,
    tag: 'cursus 42',
    link: 'https://github.com/DinoMalin/portfolio',
  },
];

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <h1>{data[0].name}</h1>
    </div>
  );
};

export default Portfolio;
