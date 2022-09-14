package cn.edu360;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude=DataSourceAutoConfiguration.class)
public class SharebikeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SharebikeApplication.class, args);
	}

}
