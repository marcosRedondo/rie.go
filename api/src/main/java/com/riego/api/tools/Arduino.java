package com.riego.api.tools;

import java.util.List;

import com.panamahitek.PanamaHitek_Arduino;

public class Arduino {
	
	PanamaHitek_Arduino dino = new PanamaHitek_Arduino();
	
	public Arduino() {
		// TODO Auto-generated constructor stub
	}

	
	// CONEXIONES
	public List<String> getConections () {
		return dino.getSerialPorts();
	}
	
	public void write (String msg) {
		
	}
	
	public void read ( ) {
		
	}

}
