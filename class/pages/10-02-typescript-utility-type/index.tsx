export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  type IProfile2 = {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  };

  //둘이 같음

  //1.Pick 타입===특정 키벨류만 가져오기
  type aaa = Pick<IProfile, "name" | "age">;

  //2.Omit 타입 === 키벨류 제거
  type bbb = Omit<IProfile, "school">;

  //3.Partial 타입==전부 물음표
  type ccc = Partial<IProfile>;

  //4.Required 타입
  type ddd = Required<IProfile>;

  //5.Union 타입
  type eee = "철수" | "영희" | "훈이";
  let child: eee;
  child = "철수";
  //6.Record 타입(Union 타입과 함꼐 사용 )
  type fff = Record<eee, IProfile>;

  // ========( type VS interface) 차이 :선언병합 =======
  //선언한것을 합칠수있음
  interface IProfile {
    candy: number;
  }

  let profile: Partial<IProfile> = {};
  profile.candy = 10;
}
