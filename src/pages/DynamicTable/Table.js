import { slugify } from "../../utils/commonFunctions";
import { TableColumnType } from "../../utils/staticObjects";

var TableName = "Demotable";
export const DemoTableColumns = [
  {
    title: "Index",
    property: "checkboxselect",
    type: TableColumnType.CHECKBOX,
    maxLength: 30,
    widthCell: "1%",
  },
  {
    title: "Name",
    property: "name",
    type: TableColumnType.TEXT,
  },
  {
    title: "Name",
    property: "name",
    type: TableColumnType.TEXT,
  },
  {
    title: "All",
    property: "avtar",
    type: TableColumnType.AVATAR_AND_NAME,
    widthCell: "1%",
  },
  {
    title: "Push",
    property: "pushNotifs",
    type: TableColumnType.DROPDOWN,
  },
  // {
  //   title: "Email",
  //   property: "emailNotifs",
  //   type: TableColumnType.IMAGE,
  // },
  // {
  //   title: "Time",
  //   property: "timeField",
  //   type: TableColumnType.DATE,
  // },
  {
    title: "Text",
    property: "smsNotifs",
    type: TableColumnType.TEXT,
  },
].map((row) => {
  row.tableName = TableName;
  row.tableSlug = "table-" + slugify(TableName) + "-slug";
  row.slug = row?.property + "-" + row.tableSlug;
  return row;
});

export const ResData = [
  {
    name: "Push",
    allNotifs:
      "pusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asd hNotifs asdadasdasd. asd asdas asdas asda asd asd asda asd as asdasd a sd as as asd asd as asd asdasd asdasd. asdasdas asd as",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs: "pushNotifs",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs:
      "pusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asd pusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asdpusasdfasdfasdfasd adsfasdf. asdf asdf asdfas dafas dfg asdf asd fasd fasd fasd fsdf asdf asd. fas dfa sdf. asdf asd hNotifs asdadasdasd. asd asdas asdas asda asd asd asda asd as asdasd a sd as as asd asd as asd asdasd asdasd. asdasdas asd as",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs: "pushNotifs",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs: "pushNotifs",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs: "pushNotifs",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs: "pushNotifs",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs: "pushNotifs",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs: "pushNotifs",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
  {
    name: "Push",
    allNotifs: "pushNotifs",
    pushNotifs: "test",
    emailNotifs: "https://source.unsplash.com/user/c_v_r",
    smsNotifs: "tet4221",
    timeField: "05/22/2012 11:12",
    avtar: "my name",
  },
];
