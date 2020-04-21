package com.riego.api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.riego.api.constants.UrlConstants;
import com.riego.api.tools.Arduino;



@RestController
@RequestMapping(UrlConstants.ARDUINO)
public class ArduinoController{

	/********************
	 *** Declarations ***
	 ********************/

	
	@GetMapping("")
	public List<String> test() {
		Arduino dino = new Arduino();
		dino.getConections();
		return dino.getConections();
	}

}
