/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ha.primebbq;

import java.io.Serializable;
import java.util.Map;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;

/**
 *
 * @author hatemalimam
 */
@ManagedBean
@ViewScoped
public class MainBean implements Serializable{

    /**
     * Creates a new instance of MainBean
     */
    private String currentNav;

    public MainBean() {
        currentNav = "/meat/burger.xhtml";
    }

    public void updateNav() {
        FacesContext context = FacesContext.getCurrentInstance();
        Map map = context.getExternalContext().getRequestParameterMap();
        currentNav = (String) map.get("currentNav");
    }

    public String getCurrentNav() {
        return currentNav;
    }

    public void setCurrentNav(String currentNav) {
        this.currentNav = currentNav;
    }

}
