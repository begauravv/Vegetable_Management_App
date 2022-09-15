package com.hexaware.veggies.entity;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vegetable")
public class Vegetable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "veg_id")
	private Long vegetableId;
	
	@Column(name = "veg_name", nullable = false)
	private String vegetableName;
	
	@Column(name = "veg_price", nullable = false)
	private double vegetablePrice;
	
	@Column(name = "veg_category", nullable = false)
	private String vegetableCategory;
	
	@Column(name = "veg_description")
	private String vegetableDescription;
	 
	@Column(name = "veg_image_url")
	private String url;
	

	public Vegetable() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Vegetable(Long vegetableId,String vegetableName, double vegetablePrice, String vegetableCategory,
			String vegetableDescription, String url) {
		super();
		this.vegetableId = vegetableId;
		this.vegetableName = vegetableName;
		this.vegetablePrice = vegetablePrice;
		this.vegetableCategory = vegetableCategory;
		this.vegetableDescription = vegetableDescription;
		this.url = url;
	}



	
	public Long getVegetableId() {
		return vegetableId;
	}



	public void setVegetableId(Long vegetableId) {
		this.vegetableId = vegetableId;
	}



	public String getVegetableName() {
		return vegetableName;
	}



	public void setVegetableName(String vegetableName) {
		this.vegetableName = vegetableName;
	}



	public double getVegetablePrice() {
		return vegetablePrice;
	}



	public void setVegetablePrice(double vegetablePrice) {
		this.vegetablePrice = vegetablePrice;
	}



	public String getVegetableCategory() {
		return vegetableCategory;
	}



	public void setVegetableCategory(String vegetableCategory) {
		this.vegetableCategory = vegetableCategory;
	}



	public String getVegetableDescription() {
		return vegetableDescription;
	}



	public void setVegetableDescription(String vegetableDescription) {
		this.vegetableDescription = vegetableDescription;
	}



	public String getUrl() {
		return url;
	}



	public void setUrl(String url) {
		this.url = url;
	}



	@Override
	public String toString() {
		return "Vegetable [vegetableId=" + vegetableId + ", vegetableName=" + vegetableName + ", vegetablePrice="
				+ vegetablePrice + ", vegetableCategory=" + vegetableCategory + ", vegetableDescription="
				+ vegetableDescription + ", url=" + url + "]";
	}
	



	



	
}
