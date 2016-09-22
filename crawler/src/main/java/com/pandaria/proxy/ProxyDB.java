package com.pandaria.proxy;

import java.util.Properties;

import com.pandaria.utils.PropertiesUtil;

public class ProxyDB {

	public static void main(String[] args) {
		System.out.println(ProxyDB.class.getResource("/").getPath());
		System.out.println(Thread.currentThread().getContextClassLoader().getResource("").getPath());
		Properties p = PropertiesUtil.getInstance().getProperties("DB");
		System.out.println(p.getProperty("username"));
		PropertiesUtil.getInstance().getString("DB", "username");
	}
}
