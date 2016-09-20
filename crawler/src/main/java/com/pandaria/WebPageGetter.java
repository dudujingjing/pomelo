package com.pandaria;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

public class WebPageGetter {

	public static void downloadPageWithURL(String urlStr) throws IOException{
		BufferedReader br = null;
		BufferedWriter bw = null;
		try {
			URL url = new URL(urlStr);
			br = new BufferedReader(new InputStreamReader(url.openStream()));
			bw = new BufferedWriter(new FileWriter(new File(String.format("%s_%s.txt", url.getHost(),System.currentTimeMillis()))));
			String content;
			while ((content = br.readLine()) != null) {
				bw.write(content);
			}
			bw.flush();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			if (bw != null) {
				bw.close();
			}
			if (br != null) {
				br.close();
			}
		}
	}
	
	public static void main(String[] args) {
		try {
			downloadPageWithURL("http://www.mafengwo.cn/");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
