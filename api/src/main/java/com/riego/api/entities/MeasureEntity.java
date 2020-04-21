package com.riego.api.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "measure")
public class MeasureEntity implements Serializable {

	/********************
	 *** Declarations ***
	 ********************/
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private long id;

	@Column(name = "date")
	private String date;

	@Column(name = "value")
	private String value;
	
	@Column(name = "units")
	private String units;
	
	@Column(name = "type")
	private String type;

	@Column(name = "author")
	private String author;

	@Column(name = "sensor")
	private String sensor;

	/********************
	 *** Constructors ***
	 ********************/
	public MeasureEntity() {
		// TODO Auto-generated constructor stub
	}

	public MeasureEntity(long id, String date, String value, String units, String type, String author, String sensor) {

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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
