package com.mercadolibre.dojos;

public interface ISpreadSheet {
	
	Cell get(CellAddress address);
	
	void set(CellAddress address, CellContent content);
	
}
