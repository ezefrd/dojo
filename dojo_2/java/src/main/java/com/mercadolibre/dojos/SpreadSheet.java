package com.mercadolibre.dojos;

import java.util.ArrayList;

public class SpreadSheet implements ISpreadSheet {

	ArrayList<Cell> cells = new ArrayList<Cell>();

	public Cell get(CellAddress address) {
		Cell cellResponse = new Cell(address,new CellContent(null));
		for(Cell cell : cells){
			if(cell.address.equals(address)){
				cellResponse = cell;
			}
		}

		return cellResponse;
	}

	public Cell get(String position) {
		Cell cellResponse = new Cell();
		for(Cell cell : cells){
			if(cell.address.getPosition().equals(position)){
				cellResponse = cell;
			}
		}

		return cellResponse;
	}

	public void set(CellAddress address, CellContent content) {
		cells.add(new Cell(address, content));
	}


	public void set(String position, Object content) {
		cells.add(new Cell(new CellAddress(position), new CellContent(content)));
	}
}
