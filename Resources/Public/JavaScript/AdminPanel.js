/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
"use strict";var TYPO3;!function(e){e.AdminPanelSelectors={adminPanelRole:"form[data-typo3-role=typo3-adminPanel]",moduleTriggerRole:"[data-typo3-role=typo3-adminPanel-module-trigger]",moduleParentClass:".typo3-adminPanel-module",contentTabRole:"[data-typo3-role=typo3-adminPanel-content-tab]",saveButtonRole:"[data-typo3-role=typo3-adminPanel-saveButton]",triggerRole:"[data-typo3-role=typo3-adminPanel-trigger]",popupTriggerRole:"[data-typo3-role=typo3-adminPanel-popup-trigger]",panelTriggerRole:"[data-typo3-role=typo3-adminPanel-panel-trigger]",panelParentClass:".typo3-adminPanel-panel",contentSettingsTriggerRole:"[data-typo3-role=typo3-adminPanel-content-settings]",contentSettingsParentClass:".typo3-adminPanel-content-settings",contentParentClass:".typo3-adminPanel-content",zoomTarget:"[data-typo3-zoom-target]",zoomClose:"[data-typo3-zoom-close]",currentContentRole:"[data-typo3-role=typo3-adminPanel-content]",contentPaneRole:"[data-typo3-role=typo3-adminPanel-content-pane]"},e.AdminPanelClasses={active:"active",activeModule:"typo3-adminPanel-module-active",activeContentSetting:"typo3-adminPanel-content-settings-active",backdrop:"typo3-adminPanel-backdrop",activeTab:"typo3-adminPanel-content-header-item-active",activePane:"typo3-adminPanel-content-panes-item-active",noScroll:"typo3-adminPanel-noscroll",zoomShow:"typo3-adminPanel-zoom-show"};e.AdminPanel=class{constructor(){this.adminPanel=document.querySelector(e.AdminPanelSelectors.adminPanelRole),this.modules=this.querySelectorAll(e.AdminPanelSelectors.moduleTriggerRole).map(t=>{const n=t.closest(e.AdminPanelSelectors.moduleParentClass);return new s(this,n,t)}),this.popups=this.querySelectorAll(e.AdminPanelSelectors.popupTriggerRole).map(e=>new t(this,e)),this.panels=this.querySelectorAll(e.AdminPanelSelectors.panelTriggerRole).map(t=>{const a=t.closest(e.AdminPanelSelectors.panelParentClass);return new n(a,t)}),this.contentSettings=this.querySelectorAll(e.AdminPanelSelectors.contentSettingsTriggerRole).map(t=>{const n=t.closest(e.AdminPanelSelectors.contentParentClass).querySelector(e.AdminPanelSelectors.contentSettingsParentClass);return new a(n,t)}),this.trigger=document.querySelector(e.AdminPanelSelectors.triggerRole),this.initializeEvents(),this.addBackdropListener()}disableModules(){this.modules.forEach(e=>e.disable())}disablePopups(){this.popups.forEach(e=>e.disable())}renderBackdrop(){const t=document.querySelector("#TSFE_ADMIN_PANEL_FORM"),n=document.createElement("div");document.querySelector("body").classList.add(e.AdminPanelClasses.noScroll),n.classList.add(e.AdminPanelClasses.backdrop),t.appendChild(n),this.addBackdropListener()}removeBackdrop(){const t=document.querySelector("."+e.AdminPanelClasses.backdrop);document.querySelector("body").classList.remove(e.AdminPanelClasses.noScroll),null!==t&&t.remove()}querySelectorAll(e,t=null){return null===t?Array.from(document.querySelectorAll(e)):Array.from(t.querySelectorAll(e))}initializeEvents(){this.querySelectorAll(e.AdminPanelSelectors.contentTabRole).forEach(e=>e.addEventListener("click",this.switchTab.bind(this))),this.querySelectorAll(e.AdminPanelSelectors.zoomTarget).forEach(e=>e.addEventListener("click",this.openZoom.bind(this))),this.querySelectorAll(e.AdminPanelSelectors.zoomClose).forEach(e=>e.addEventListener("click",this.closeZoom.bind(this))),this.querySelectorAll(e.AdminPanelSelectors.triggerRole).forEach(e=>e.addEventListener("click",this.toggleAdminPanelState.bind(this))),this.querySelectorAll(e.AdminPanelSelectors.saveButtonRole).forEach(e=>e.addEventListener("click",this.sendAdminPanelForm.bind(this))),this.querySelectorAll("[data-typo3-role=typo3-adminPanel-content-close]").forEach(e=>{e.addEventListener("click",()=>{this.disableModules(),this.removeBackdrop()})}),this.querySelectorAll(".typo3-adminPanel-table th, .typo3-adminPanel-table td").forEach(e=>{e.addEventListener("click",()=>{e.focus();try{document.execCommand("copy")}catch(e){}})})}switchTab(t){t.preventDefault();const n=e.AdminPanelClasses.activeTab,a=e.AdminPanelClasses.activePane,s=t.currentTarget,l=s.closest(e.AdminPanelSelectors.currentContentRole),i=this.querySelectorAll(e.AdminPanelSelectors.contentTabRole,l),o=this.querySelectorAll(e.AdminPanelSelectors.contentPaneRole,l);i.forEach(e=>e.classList.remove(n)),s.classList.add(n),o.forEach(e=>e.classList.remove(a)),document.querySelector("[data-typo3-tab-id="+s.dataset.typo3TabTarget+"]").classList.add(a)}openZoom(t){t.preventDefault();const n=t.currentTarget.getAttribute("data-typo3-zoom-target");document.querySelector("[data-typo3-zoom-id="+n+"]").classList.add(e.AdminPanelClasses.zoomShow)}closeZoom(t){t.preventDefault(),t.currentTarget.closest("[data-typo3-zoom-id]").classList.remove(e.AdminPanelClasses.zoomShow)}sendAdminPanelForm(e){e.preventDefault();const t=new FormData(this.adminPanel),n=new XMLHttpRequest;n.open("POST",this.adminPanel.dataset.typo3AjaxUrl),n.send(t),n.onload=(()=>location.reload())}toggleAdminPanelState(){const e=new XMLHttpRequest;e.open("GET",this.trigger.dataset.typo3AjaxUrl),e.send(),e.onload=(()=>location.reload())}addBackdropListener(){this.querySelectorAll("."+e.AdminPanelClasses.backdrop).forEach(t=>{t.addEventListener("click",()=>{this.removeBackdrop(),this.querySelectorAll(e.AdminPanelSelectors.moduleTriggerRole).forEach(t=>{t.closest(e.AdminPanelSelectors.moduleParentClass).classList.remove(e.AdminPanelClasses.activeModule)})})})}};class t{constructor(e,t){this.adminPanel=e,this.element=t,this.initializeEvents()}isActive(){return this.element.classList.contains(e.AdminPanelClasses.active)}enable(){this.element.classList.add(e.AdminPanelClasses.active)}disable(){this.element.classList.remove(e.AdminPanelClasses.active)}initializeEvents(){this.element.addEventListener("click",()=>{this.isActive()?this.disable():(this.adminPanel.disablePopups(),this.enable())})}}class n{constructor(e,t){this.element=e,this.trigger=t,this.initializeEvents()}isActive(){return this.element.classList.contains(e.AdminPanelClasses.active)}enable(){this.element.classList.add(e.AdminPanelClasses.active)}disable(){this.element.classList.remove(e.AdminPanelClasses.active)}initializeEvents(){this.trigger.addEventListener("click",()=>{this.isActive()?this.disable():this.enable()})}}class a{constructor(e,t){this.element=e,this.trigger=t,this.initializeEvents()}isActive(){return this.element.classList.contains(e.AdminPanelClasses.activeContentSetting)}enable(){this.element.classList.add(e.AdminPanelClasses.activeContentSetting)}disable(){this.element.classList.remove(e.AdminPanelClasses.activeContentSetting)}initializeEvents(){this.trigger.addEventListener("click",()=>{this.isActive()?this.disable():this.enable()})}}class s{constructor(e,t,n){this.adminPanel=e,this.element=t,this.trigger=n,this.initializeEvents()}isActive(){return this.element.classList.contains(e.AdminPanelClasses.activeModule)}enable(){this.element.classList.add(e.AdminPanelClasses.activeModule)}disable(){this.element.classList.remove(e.AdminPanelClasses.activeModule)}initializeEvents(){this.trigger.addEventListener("click",e=>{this.adminPanel.removeBackdrop(),this.isActive()?this.disable():(this.adminPanel.disableModules(),this.adminPanel.renderBackdrop(),this.enable())})}}}(TYPO3||(TYPO3={})),window.addEventListener("load",()=>new TYPO3.AdminPanel,!1);