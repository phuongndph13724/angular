import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  name = 'Nguyễn Đắc Phương';
  class = 'WE16301';
  age = '21';
  address = 'Bắc Ninh';
  students = [
    {
      id: 'PH1',
      name: 'Nguyễn Đắc Phương',
      status: 0,
    },
    {
      id: 'PH2',
      name: 'Nguyễn Đắc Trọng',
      status: 1,
    },
    {
      id: 'PH3',
      name: 'Nguyễn Đắc Cường',
      status: 1,
    },
  ];
  champs = [
    {
      id: 1,
      name: 'Yasuo',
      dame: 67,
      defend: 32,
      speed: 320,
      price: 6300,
      avatar:
        'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3a319fc884dc6880/5db0601c242f426df132f985/RiotX_ChampionList_yasuo.jpg?quality=90&width=250',
    },
    {
      id: 2,
      name: 'Leesin',
      dame: 65,
      defend: 32,
      speed: 320,
      price: 6300,
      avatar:
        'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt075d278529811445/5db05fde6af83b6d7032c8fe/RiotX_ChampionList_leesin.jpg?quality=90&width=250',
    },
  ];
  studentName1 = 'Phương';
  studentIdentity = 'PH13724';
  stydentName = [
    {
      id: 1,
      name: 'Nguyễn Đắc Phương',
    },
    {
      id: 2,
      name: 'Nguyễn Đắc Phương',
    },
    {
      id: 3,
      name: 'Nguyễn Đắc Phương',
    },
    {
      id: 4,
      name: 'Nguyễn Đắc Phương',
    },
  ];
}
