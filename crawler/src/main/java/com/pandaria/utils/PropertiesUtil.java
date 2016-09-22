package com.pandaria.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Enumeration;
import java.util.Map;
import java.util.Properties;
import java.util.ResourceBundle;
import java.util.concurrent.ConcurrentHashMap;

/**
 * An util class for loading properties from classpath
 * @author Administrator
 *
 */
public final class PropertiesUtil {

	private static Map<String,Properties> propMap = null;
	private volatile static PropertiesUtil instance = null;
	private final String format = "%s.properties";
	
	private PropertiesUtil(){
		
	}
	/**
	 * A method for PropertiesUtil Singleton 
	 * @return
	 */
	public static PropertiesUtil getInstance(){
		if (instance == null) {
			synchronized (PropertiesUtil.class) {
				if (instance == null) {
					instance = new PropertiesUtil();
					propMap = new ConcurrentHashMap<String,Properties>();
				}
			}
		}
		return instance;
	}
	
	public Properties getProperties(String propName){
		if (propMap.get(propName) == null) {
			Properties p = loadProperties(propName);
			if (p == null) {
				return null;
			}else{
				propMap.put(propName, p);
			}
		}
		return propMap.get(propName);
	}
	
	
	public String getProperty(String propName, String keyName){
		return getProperties(propName).getProperty(keyName);
	}
	
	/**
	 * Load properties under the same directory with class package, It's thread safe.
	 * @param propName
	 * @return
	 */
	public Properties loadProperties(String propName){
		String n = String.format(format, propName);
		String filePath = Thread.currentThread().getContextClassLoader().getResource("").getPath()+n;
		InputStream is;
		Properties prop = null;
		try {
			is = new FileInputStream(new File(filePath));
			prop = new Properties();
			prop.load(is);
			is.close();
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prop;
	}
	
	/**
	 * Load resource from classpath.
	 * Note: Not thread safe.
	 * @param propName
	 * @param keyName
	 * @return
	 */
	public String getString(String propName,String keyName){
		ResourceBundle rb = ResourceBundle.getBundle(propName);
		Enumeration<String> en = rb.getKeys();
		while (en.hasMoreElements()) {
			String key = en.nextElement();
			System.out.println(String.format("Key:%s, Value:%s.", key,rb.getString(key)));
		}
		return rb.getString(keyName);
	}
}
