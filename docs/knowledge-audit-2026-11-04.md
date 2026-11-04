# 软考高项学习网站｜知识点完整性核查（2026-11-04）

## 核查范围和结论

对已发布的 24 章网页数据开展结构核查：

- 第 1 章：15 个知识小节，15 份对应笔记，40 道配套题；内容位于 data/catalog.js 与 data/content.js。
- 第 2—24 章：共 429 个知识小节，429 份对应笔记，760 道配套题。
- 合计 444 个知识小节、800 道题。第 2—24 章的 data/chapterNN.js 与同名 .json 数据一致，没有发现“目录中有小节而笔记数据缺失”的结构性问题。
- **注意：结构完整不等于教材内容完整。** 本次未拿到可逐页核对的第 1—24 章完整原始讲义和指定教材，因此不能宣称“所有知识细节无遗漏”。

## 已发现并补充

**第 2 章 / 2.1.2 计算机网络 / SDN 三层与接口**

原版笔记只写了“北向、南向、东西向”和 OpenFlow，没有单独解释英文缩写，影响记忆和辨析。

本次在已有 SDN 内容之后，以**新增知识块**补充以下概念（原来的 OSI/TCP-IP/SDN/5G 条目均保留）：

1. NBI：Northbound Interface，北向，应用平面与控制平面之间。
2. A-CPI：Applications-Controller Plane Interface，ONF 对应用—控制器接口的称谓，亦称 NBI。
3. SBI：Southbound Interface，南向，控制平面与数据平面之间，常见协议/机制包括 OpenFlow、NETCONF。
4. D-CPI：Data-Controller Plane Interface，ONF 对数据—控制器接口的称谓。
5. CPI：Controller Plane Interface，控制器平面接口的统称；非独立的新一层。
6. EBI/WBI：东西向接口，常用于控制器间协同，不同架构的命名与规范有所差异。
7. NBI/A-CPI 与 SBI/D-CPI 的对比和答题陷阱。

**外部参考：**
- ONF TR-521: SDN Architecture, Issue 1.1 §8.1.1、术语表： https://opennetworking.org/wp-content/uploads/2014/10/TR-521_SDN_Architecture_issue_1.1.pdf
- SDN 接口概览（美国 HPC 网络知识库）： https://hpc.mil/solution-areas/networking/sdn-knowledge-base/software-defined-overview

以上为**外部核对补充**，并非声称原教材或用户课件逐字包含这些说明。

## 其它章节的核查结果与待核对项

- **第 2—8 章：** 笔记通常包含多个分类、表格与步骤块，已核对所有小节 ID 对应笔记；尚未逐页校验原始资料。
- **第 9—24 章：** 多数小节以一块“核心考点/理解辨析”摘要组织，虽然没有发现空白条目，仍有**细节压缩的风险**，尤其是 ITTO、术语全称、步骤条件、公式适用前提和法条时效性。不能仅凭笔记存在判断无遗漏。
- 优先逐页核查：第 9—17 章管理过程/ITTO、第 18 章八大绩效域、第 19 章配置变更、第 21 章计算公式、第 24 章法律法规（需留意版本与适用条件）。
- 如后续提供第 1—24 章原始课件/教材页面，应按“章节 → 小节 → 逐条知识点 → 课件页码”比对，输出已覆盖/缺失/冲突列表，再逐条追加；**不能把现有正文替换成更短的摘要。**

## 防止知识点误删

新增 \`scripts/check_knowledge_integrity.py\` 并接入部署工作流，每次部署将检查：

- 24 章目录/笔记是否失配；
- 第 2—24 章 JS/JSON 内容是否一致；
- 已有知识小节、习题、知识块及条目总数不得低于本次基线；
- SDN 的 NBI、SBI、A-CPI、D-CPI、CPI 是否存在。

这一程序能阻止常见的数据条目误删，**不能替代人工核对概念准确性和教材覆盖度**。
