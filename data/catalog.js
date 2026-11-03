window.EXAM_CATALOG = [
  {group:'信息技术与信息系统',color:'blue',chapters:[
    '信息化发展','信息技术发展','信息系统治理','信息系统管理','信息系统工程']},
  {group:'项目管理基础',color:'violet',chapters:[
    '项目管理概论','项目立项管理','项目整合管理','项目范围管理','项目进度管理','项目成本管理','项目质量管理','项目资源管理','项目沟通管理','项目风险管理','项目采购管理','项目干系人管理']},
  {group:'绩效域与高级管理',color:'orange',chapters:[
    '项目绩效域','配置与变更管理','高级项目管理','项目管理科学基础']},
  {group:'组织治理与规范',color:'green',chapters:[
    '组织通用治理','组织通用管理','法律法规与标准规范']}
];
window.EXAM_CHAPTERS = window.EXAM_CATALOG.flatMap(g=>g.chapters.map(name=>({id:window.EXAM_CATALOG.flatMap(x=>x.chapters).indexOf(name)+1,name,group:g.group,color:g.color})));
window.EXAM_SECTIONS = [
 {id:'1.1',title:'信息与信息化',part:1,page:'3–7',mindmap:2,children:[
  {id:'1.1.1',title:'信息',page:3},{id:'1.1.2',title:'信息系统',page:4},{id:'1.1.3',title:'信息化',page:5}]},
 {id:'1.2',title:'现代化基础设施',part:2,page:'9–20',mindmap:4,children:[
  {id:'1.2.1',title:'新型基础设施建设',page:9},{id:'1.2.2',title:'工业互联网',page:10},{id:'1.2.3',title:'车联网',page:15}]},
 {id:'1.3',title:'现代化创新发展',part:3,page:'21–26',mindmap:5,children:[
  {id:'1.3.1',title:'农业农村现代化',page:21},{id:'1.3.2',title:'两化融合与智能制造',page:22},{id:'1.3.3',title:'消费互联网',page:25}]},
 {id:'1.4',title:'数字中国',part:4,page:'27–38',mindmap:6,children:[
  {id:'1.4.1',title:'数字经济',page:28},{id:'1.4.2',title:'数字政府',page:32},{id:'1.4.3',title:'数字社会',page:34},{id:'1.4.4',title:'数字生态',page:36}]},
 {id:'1.5',title:'数字化转型与元宇宙',part:5,page:'39–49',mindmap:8,children:[
  {id:'1.5.1',title:'数字化转型',page:39},{id:'1.5.2',title:'元宇宙',page:48}]}
];