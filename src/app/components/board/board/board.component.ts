import { Component, OnInit } from '@angular/core';
import {List, ListInterface} from '../../../model/list/list.model';
import {LocalService} from '../../../service/board/local/local.service';
import {BoardModel} from '../../../model/board/board.model';
import {MovementIntf} from '../../../model/card/movement';
import {FetchApiService} from '../../../service/fetch-api.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists: ListInterface[];

  constructor(
    private localService: LocalService,
    private api: FetchApiService,
    ) { }

  ngOnInit() {

    const board = this.localService.getBoard();
    this.lists = board.lists || [];

    this.api.getAccessToken().subscribe( response => {
      console.log(response);
    });

  }

  addList() {
    const newList: ListInterface = new List();
    newList.position = this.lists.length + 1;
    newList.name = `List #${newList.position}`;
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList);
  }

  moveCardAcrossList(movementInformation: MovementIntf) {
    const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
    this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx , 0 , ...cardMoved);
  }

  saveBoard() {
    const boardModel = new BoardModel();
    boardModel.lists = this.lists;
    this.localService.saveBoard(boardModel);
  }

  deleteList(listIndex: number) {
    this.lists.splice(listIndex, 1);
  }



}
