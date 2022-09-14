package cn.edu360.service;

import java.util.List;

import org.springframework.data.geo.GeoResult;
import org.springframework.web.bind.annotation.RequestBody;

import cn.edu360.pojo.Bike;

public interface BikeService {

	public void save(Bike bike);

	public List<Bike> findNear(double longitude, double latitude);

//	public Bike fault(Bike bike);
//	
//	public Bike reserve(Bike bike);
	
	public Bike fault(Long bikeNo);

	public Bike reserve(Long bikeNo, Long bikeNo1, Long bikeNo2, int num);
	
	public Bike cancelReserve(Long bikeNo);

	public List<Bike> canReserve();
	
	public List<Bike> unReserve();
	
	public List<Bike> broken();
	
	public List<Bike> reserving();
}
