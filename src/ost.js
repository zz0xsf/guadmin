
export default function onclickst(prop)
{
  console.log(prop);
  console.log(prop.target.id);
  let chooseText = prop.target.innerText;
  if (chooseText === "主页")
  {
    return "/";
  }
  if (chooseText === "管理")
  {
      return "/set/";
  }
  if (chooseText === "登录")
  {
      return "/login/";
  }
  if (chooseText === "个人中心")
  {
    return "/usermain/";
  }
  return "no";
}