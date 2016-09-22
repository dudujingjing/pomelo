package com.pandaria;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
/**
 * JavaScript 脚本解释引擎Rhino，用来解析了调试js
 * @author duzhiwei
 *
 */
public class JsPageGetter {

	public void parsePage(File file){
		ScriptEngineManager factory = new ScriptEngineManager();
		ScriptEngine engine = factory.getEngineByName("JavaScript");
		try {
			engine.eval(new FileReader(file));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ScriptException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
