package com.riego.api.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.riego.api.constants.UrlConstants;
import com.riego.api.entities.MeasureEntity;
import com.riego.api.models.MeasureModel;
import com.riego.api.services.MeasureService;

@RestController
@RequestMapping(UrlConstants.MEASURE)
public class MeasureController{

	/********************
	 *** Declarations ***
	 ********************/
	@Autowired
	@Qualifier("MeasureService")
	private MeasureService srvc;
	
	@PutMapping("")
	public boolean set(@RequestBody @Valid MeasureEntity entity) {
		srvc.set(entity);
		return true;
	}
	
	@GetMapping("")
	public List<MeasureModel> list() {
		return srvc.getAll();
	}
	
	@DeleteMapping("/{id}")
	public boolean remove(@PathVariable("id") long id) {
		return srvc.delete(id);
	}

}
