(this["webpackJsonpreact2-goit-react-hw-02-feedback"]=this["webpackJsonpreact2-goit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,c){e.exports={statisticList:"StatisticList_statisticList__2BKvY"}},17:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(3),i=c.n(s),o=(c(17),c(18),c(6)),r=c(7),b=c(8),u=c(12),d=c(11),l=c(2),j=(c(19),c(5)),f=c.n(j),k=c(1),O=function(e){var t=e.options,c=e.onIncreaseFeedback;return Object(k.jsx)("ul",{className:f.a.buttonList,children:t.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)("button",{className:f.a[e],name:e,type:"button",onClick:c,children:e})},e.toString())}))})},h=function(e){var t=e.message;return Object(k.jsx)("p",{children:t})},_=c(9),x=c.n(_),v=function(e){var t=e.title,c=e.children;return Object(k.jsxs)("section",{className:x.a.section,children:[t&&Object(k.jsx)("h2",{children:t}),c]})},p=function(e){var t=e.name,c=e.value;return Object(k.jsxs)("span",{children:[t,": ",c]})},g=c(10),F=c.n(g),m=function(e){var t=e.state,c=e.total,n=e.positive,a=Object.keys(t);return Object(k.jsxs)("ul",{className:F.a.statisticList,children:[a.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(p,{name:e,value:t[e]})},e.toString())})),Object(k.jsx)("li",{children:Object(k.jsxs)("span",{children:["Total: ",c]})}),Object(k.jsx)("li",{children:Object(k.jsxs)("span",{children:["Positive feedbacks: ",n,"%"]})})]})},B=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.increaseFeedback=function(t){var c=t.target.name;switch(console.log(c),c){case"good":l.b.success("you left GOOD feedback \ud83d\ude03");break;case"neutral":l.b.info("you left NEUTRAL feedback \ud83d\ude10");break;case"bad":l.b.error("you left BAD feedback \ud83d\ude1e")}e.setState((function(e){return Object(o.a)({},c,e[c]+1)}))},e.countTotalFeedbacks=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return(e.state.good/e.countTotalFeedbacks()*100).toFixed(0)},e}return Object(b.a)(c,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.countTotalFeedbacks(),c=this.countPositiveFeedbackPercentage(),n=this.state;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v,{title:"Please, leave feedback",children:Object(k.jsx)(O,{onIncreaseFeedback:this.increaseFeedback,options:e})}),Object(k.jsx)(v,{title:"Statistic",children:0===t?Object(k.jsx)(h,{message:"No feedback given"}):Object(k.jsx)(m,{total:t,positive:c,state:n})}),Object(k.jsx)(l.a,{autoClose:2e3})]})}}]),c}(n.Component);i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={feedbackBtn:"FeedbackButton_feedbackBtn__284TY",good:"FeedbackButton_good__2Ja7O FeedbackButton_feedbackBtn__284TY",neutral:"FeedbackButton_neutral__1mxJ2 FeedbackButton_feedbackBtn__284TY",bad:"FeedbackButton_bad__1cqCD FeedbackButton_feedbackBtn__284TY",buttonList:"FeedbackButton_buttonList__1Bmyd"}},9:function(e,t,c){e.exports={section:"Section_section__39Il0"}}},[[21,1,2]]]);
//# sourceMappingURL=main.18ddbac6.chunk.js.map