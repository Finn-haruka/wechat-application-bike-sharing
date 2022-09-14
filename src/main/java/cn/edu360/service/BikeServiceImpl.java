package cn.edu360.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.GeoResult;
import org.springframework.data.geo.GeoResults;
import org.springframework.data.geo.Metrics;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.NearQuery;
//import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

//import cn.edu360.mapper.BikeMapper;
import cn.edu360.pojo.Bike;



@Service
public class BikeServiceImpl implements BikeService {
	
	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public void save(Bike bike) {
		//调用具体的业务
		//mongoTemplate.insert(bike, "bikes");
		mongoTemplate.insert(bike);  //在Bike的类中添加了注解，注解中保存了映射关系
		
	}
	
//根据经纬度，查找附近单车
	@Override
	public List<Bike> findNear(double longitude, double latitude) {
		//查找所有的单车
		return mongoTemplate.findAll(Bike.class);
		
//		NearQuery nearQuery = NearQuery.near(longitude,latitude);
//		//查找的范围和距离单位
//		nearQuery.maxDistance(0.2, Metrics.KILOMETERS);
//		GeoResults<Bike> bikes = mongoTemplate.geoNear(
//				nearQuery.query(new Query(Criteria.where("status").is(0)).limit(10)), Bike.class);
//		return null;
	}
	
//	@Override
//	public Bike fault(@RequestBody Bike bike){
//		Bike one = getBikeInfo(bike);
//		one.setStatus(1);
//		if(one == null) return null;
//		else return one;
//	}
//	
//	@Override
//	public Bike reserve(@RequestBody Bike bike){
//		Bike one = getBikeInfo(bike);
//		one.setStatus(2);
//		if(one == null) return null;
//		else return one;
//	}
//
//	private Bike getBikeInfo(Bike bike){
//		QueryWrapper<Bike> queryWrapper = new QueryWrapper<>();
//		queryWrapper.eq("BikeNo",bike.getBikeNo());
//		Bike one;
//		one = newMapper.selectOne(queryWrapper);
//        return one;
//		return queryWrapper;
//	}
	
//	@Autowired
//	private BikeMapper bikemapper;
	
	@Override
	public Bike fault(Long bikeNo) {
////		Query query = new Query(Criteria.where("BikeNo").is(10010));
//		Query query = new Query();
//		System.out.println(bikeNo);
//		Criteria criteria = Criteria.where("bikeNo").is(bikeNo);
//		query.addCriteria(criteria);
//		Update update = new Update();
//		update.inc("status",1);
//		mongoTemplate.updateFirst(query,update,Bike.class);
//		
//		
//		Bike result = mongoTemplate.findOne(query, Bike.class);
////		System.out.println(result.getBikeNo());
////		result.setStatus(1);
////		System.out.println(result.getStatus());
//		return result;
		Query query = new Query();
		System.out.println(bikeNo);
		Criteria criteria = Criteria.where("bikeNo").is(bikeNo);
		query.addCriteria(criteria);
		Bike result = mongoTemplate.findOne(query, Bike.class);
		if(result.getStatus() == 0) {
			Update update = new Update();
			update.inc("status",2);
			mongoTemplate.updateFirst(query,update,Bike.class);
			return result;
		}
		else return null;
	}
	
	@Override
	public Bike reserve(Long bikeNo, Long bikeNo1, Long bikeNo2, int num) {
		Query query = new Query();
//		System.out.println(bikeNo);
//		System.out.println(bikeNo1);
//		System.out.println(bikeNo2);
//		System.out.println(num);
		if(num==1) {
			Criteria criteria = Criteria.where("bikeNo").is(bikeNo);
			query.addCriteria(criteria);
		}
		else if(num==2) {
			Criteria criteria = Criteria.where("bikeNo").is(bikeNo1);
			query.addCriteria(criteria);
		}
		else if(num==3) {
			Criteria criteria = Criteria.where("bikeNo").is(bikeNo2);
			query.addCriteria(criteria);
		}
		Bike result = mongoTemplate.findOne(query, Bike.class);
		if(result.getStatus() == 0) {
			Update update = new Update();
			update.inc("status",3);
			mongoTemplate.updateFirst(query,update,Bike.class);
			return result;
		}
		else return null;
		
	}
	
		public Bike cancelReserve(Long bikeNo) {
			Query query = new Query();
			Criteria criteria  = Criteria.where("bikeNo").is(bikeNo);
			query.addCriteria(criteria);
			Bike result = mongoTemplate.findOne(query, Bike.class);
			if(result.getStatus() == 3) {
				Update update = new Update();
				update.inc("status",-3);
				mongoTemplate.updateFirst(query, update, Bike.class);
				return result;
			}
			else 
				return null;
		}
		
	public List<Bike> canReserve(){
		Criteria criteria = new Criteria();
		criteria.and("status").is(0);
		Query query = new Query(criteria);
		List<Bike> findList = mongoTemplate.find(query, Bike.class);
//		int i;
//		for(i=0; i<findList.size();i++) {
//			System.out.println(findList.get(i).getBikeNo());
//		}
//		
		return findList;
	};
	
	public List<Bike> unReserve(){
		Criteria criteria = new Criteria();
		criteria.and("status").is(1);
		Query query = new Query(criteria);
		List<Bike> findList = mongoTemplate.find(query, Bike.class);
		return findList;
	};
	public List<Bike> broken(){
		Criteria criteria = new Criteria();
		criteria.and("status").is(2);
		Query query = new Query(criteria);
		List<Bike> findList = mongoTemplate.find(query, Bike.class);
		return findList;
	};	
	public List<Bike> reserving(){
		Criteria criteria = new Criteria();
		criteria.and("status").is(3);
		Query query = new Query(criteria);
		List<Bike> findList = mongoTemplate.find(query, Bike.class);
		return findList;
	};
}
