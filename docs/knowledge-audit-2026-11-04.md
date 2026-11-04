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


## 第二轮：从已有题库反查英文缩写（2026-11-04）

把 24 章配套题目的题干/答案解析中的英文缩写与对应小节的笔记逐项比对。对有依据的遗漏采用**追加知识块**的方式处理；不根据错误选项或未经验证的猜测补写。连同最初补充的 SDN A-CPI / D-CPI，累计在九章的 12 个不同知识小节新增 13 个知识块，已有知识内容保持原样。

| 章节 | 反查发现的遗漏 | 追加位置 |
|---|---|---|
| 2 信息技术发展 | NBI/SBI/A-CPI/D-CPI/CPI，以及 5G 的 OFDMA、MIMO | 2.1.2 |
| 12 质量管理 | COQ（质量成本）、PDCA（持续改进） | 12.3.2、12.4.1 |
| 13 资源管理 | RAM、RACI、OBS 等责任矩阵与组织分解术语 | 13.3.1 |
| 15 风险管理 | SWOT 的优势、劣势、机会、威胁四象限 | 15.4.1 |
| 16 采购管理 | TOR 工作大纲、ADR 替代争议解决 | 16.3.2、16.5.1 |
| 18 项目绩效域 | SMART、ROI、NPV、WIP 的作用与区别 | 18.7.1 |
| 19 配置与变更管理 | CCB 与配置管理员的职责区别 | 19.1.1 |
| 22 组织通用治理 | SWOT 战略环境分析、KPI 转型指标 | 22.1.1、22.3.1 |
| 24 法律法规与标准 | GB/T 44109-2024、GB/T 22239-2019 | 24.2.1 |

此次追加只针对有题库依据的具体术语，标注“由配套题库反查”；ONF、PMI、ASQ 和中国国家标准平台查证的内容，另给出可点开的来源链接。

参考资料：
- ONF TR-521 SDN Architecture Issue 1.1：https://opennetworking.org/wp-content/uploads/2014/10/TR-521_SDN_Architecture_issue_1.1.pdf
- PMI 术语词典：https://www.pmi.org/standards/lexicon
- PMI 风险识别：https://www.pmi.org/learning/library/risk-identification-life-cycle-tools-7784
- ASQ PDCA：https://asq.org/quality-resources/pdca-cycle
- 国家标准 GB/T 44109-2024：https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=D3B354CD2E0ECF1821C1D8B4204BEE7C
- 国家标准 GB/T 22239-2019：https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=BAFB47E8874764186BDB7865E8344DAF

### 核对限制

444 个知识小节都具备笔记条目，且 800 道题保留，**不意味着每个知识小节已经覆盖教材的全部内容**。第 9—24 章中许多小节仍是摘要型笔记。本次没有可逐页对照的 24 章完整原版教材和课件，因此不宣称已经完成全文逐条核对；后续获得原始资料时，须按“原文—网页笔记—差异—来源页码”继续补全。
