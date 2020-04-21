package com.riego.api.models;

import com.riego.api.entities.MeasureEntity;

public class MeasureModel {

	/********************
	 *** Declarations ***
	 ********************/
	private long id;
	private String date;
	private String value;
	private String units;
	private String type;
	private String author;
	private String sensor;

	/********************
	 *** Constructors ***
	 ********************/
	public MeasureModel() {
		// TODO Auto-generated constructor stub
	}

	public MeasureModel(MeasureEntity entity) {

		this.id = entity.getId();
		this.date = entity.getDate();
		this.value = entity.getValue();
		this.units = entity.getUnits();
		this.type = entity.getType();
		this.author = entity.getAuthor();
		this.sensor = entity.getSensor();
	}

	

	public MeasureModel(long id, String date, String value, String units, String type, String author, String sensor) {
		super();
		this.id = id;
		this.date = date;
		this.value = value;
		this.units = units;
		this.type = type;
		this.author = author;
		this.sensor = sensor;
	}

	/***************
	 *** Methods ***
	 ***************/

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getUnits() {
		return units;
	}

	public void setUnits(String units) {
		this.units = units;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getSensor() {
		return sensor;
	}

	public void setSensor(String sensor) {
		this.sensor = sensor;
	}

}
