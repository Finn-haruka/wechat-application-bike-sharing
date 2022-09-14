package cn.edu360.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.GeoResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import cn.edu360.pojo.Bike;
import cn.edu360.service.BikeService;

@Controller
public class BikeController {
	
	@Autowired
	private BikeService bikeService;
	
	@RequestMapping("/bike/add")
    @ResponseBody
    public String add(@RequestBody Bike bike) {
        //添加单车，到mongodb中
        bikeService.save(bike);
        return "success ";
    }
	
	@RequestMapping("/bike/findNear")
	@ResponseBody
	public List<Bike> findNear(double longitude, double latitude) {
		
//		System.out.println(bike.getLatitude());
		//调用service,数据保存到Mongodb中
		List<Bike> bikes= bikeService.findNear(longitude, latitude);
		
		return bikes;
	}
	
//	@RequestMapping("/bike/fault")
//	@ResponseBody
//	public Bike fault(@RequestBody Bike bike) {
//		Long status = bike.getBikeNo();
////		List<Bike> bikes= bikeService.changeStatus(int status);
//		return bikeService.fault(bike);
//	}
//	
//	@RequestMapping("/bike/fault")
//	@ResponseBody
//	public Bike reserve(@RequestBody Bike bike) {	
//		Long status = bike.getBikeNo();
//		return bikeService.reserve(bike);
//	}
	
	@RequestMapping("/bike/fault")
	@ResponseBody
	public boolean fault(Long bikeNo) {
		Bike bike = bikeService.fault(bikeNo); 
//		return true;
		if(bike == null)
			return false;
		return true;

	}
	
	@RequestMapping("/bike/reserve")
	@ResponseBody
	public boolean reserve(Long bikeNo, Long bikeNo1, Long bikeNo2, int num) {
		Bike bike = bikeService.reserve(bikeNo, bikeNo1, bikeNo2, num); 
//		return true;
		if(bike == null)
			return false;
		return true;
	}
	@RequestMapping("/bike/cancelReserve")
	@ResponseBody
	public boolean cancelReserve(Long bikeNo) {
		Bike bike = bikeService.cancelReserve(bikeNo); 
		if(bike == null)
			return false;
		return true;
	}

	@RequestMapping("/bike/canReserve")
	@ResponseBody
	public List<Bike> canReserve() {
		List<Bike> bikes = bikeService.canReserve();
		return bikes;
	}
	@RequestMapping("/bike/unReserve")
	@ResponseBody
	public List<Bike> unReserve() {
		List<Bike> bikes = bikeService.unReserve();
		return bikes;
	}
	@RequestMapping("/bike/broken")
	@ResponseBody
	public List<Bike> broken() {
		List<Bike> bikes = bikeService.broken();
		return bikes;
	}
	@RequestMapping("/bike/reserving")
	@ResponseBody
	public List<Bike> reserving() {
		List<Bike> bikes = bikeService.reserving();
		return bikes;
	}
}

