import { Component, OnInit } from '@angular/core';
//import img from '../../../assets/img/imagenPrueba.jpg';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products = [
    {
      title: "Smart TV",
      subTitle: "Samsung Smart TV",
      cantidad: 15,
      existencia: true,
      img: '../../../assets/img/imagenPrueba.jpg',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '350',
      id: Math.random() + 1,
    },
    {
      title: "Producto 2",
      subTitle: "Pequeña descripcion 2",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '1350',
      id: Math.random() + 1,
    },
    {
      title: "Producto 3",
      subTitle: "Pequeña descripcion 3",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '250',
      id: Math.random() + 1,
    },
    {
      title: "Mochila",
      subTitle: "Pequeña descripcion 4",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '150',
      id: Math.random() + 1,
    },
    {
      title: "Camara web",
      subTitle: "Pequeña descripcion 5",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '450',
      id: Math.random() + 1,
    },
    {
      title: "Teclado",
      subTitle: "Pequeña descripcion 5",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '450',
      id: Math.random() + 1,
    },
    {
      title: "Mouse",
      subTitle: "Pequeña descripcion 5",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '450',
      id: Math.random() + 1,
    },
    {
      title: "Pantlla",
      subTitle: "Pequeña descripcion 5",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '450',
      id: Math.random() + 1,
    },
    {
      title: "Computadora",
      subTitle: "Pequeña descripcion 5",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '450',
      id: Math.random() + 1,
    },
    {
      title: "Telefono",
      subTitle: "Pequeña descripcion 5",
      cantidad: 15,
      existencia: true,
      img: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aspernatur quos placeat sint repellendus laborum molestiae iste vero consequuntur! Ipsam sint expedita in quo, sit error nulla odit culpa repellendus.',
      precio: '450',
      id: Math.random() + 1,
    }
  ]

}
