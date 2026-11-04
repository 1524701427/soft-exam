/* 99 张基于讲义要点整理的原创交互式知识图解，不含原课程图像 */
window.EXAM_VISUALS = [
  {
    "id": "c1-lifecycle",
    "chapterId": 1,
    "topicId": "1.1.2",
    "kind": "path",
    "title": "信息系统生命周期",
    "subtitle": "5 个连续阶段，把项目从规划走向运维",
    "items": [
      {
        "label": "系统规划",
        "detail": "明确建设必要性，完成可行性分析与项目开发计划。"
      },
      {
        "label": "系统分析",
        "detail": "梳理并确认业务与系统需求。"
      },
      {
        "label": "系统设计",
        "detail": "开展概要设计与详细设计。"
      },
      {
        "label": "系统实施",
        "detail": "编码实现、集成与测试。"
      },
      {
        "label": "运行维护",
        "detail": "正式运行、持续维护与必要时更新替代。"
      }
    ],
    "center": "",
    "insight": "记忆顺序：规划 → 分析 → 设计 → 实施 → 运行维护。",
    "sourcePage": 4
  },
  {
    "id": "c1-infra",
    "chapterId": 1,
    "topicId": "1.2.1",
    "kind": "compare",
    "title": "新型基础设施三大类",
    "subtitle": "按功能定位区分，而不是只背七个具体领域",
    "items": [
      {
        "label": "信息基础设施",
        "detail": "以新一代信息技术为基础，包含通信基础设施、新技术基础设施与算力基础设施。"
      },
      {
        "label": "融合基础设施",
        "detail": "将互联网、大数据、人工智能等技术融入传统基础设施，如智能交通和智慧能源。"
      },
      {
        "label": "创新基础设施",
        "detail": "支撑科学研究、技术开发与产品研制，如科教和产业技术创新设施。"
      }
    ],
    "center": "",
    "insight": "信息=通信/新技术/算力；融合=交通/能源；创新=科教/科研。",
    "sourcePage": 9
  },
  {
    "id": "c1-industry",
    "chapterId": 1,
    "topicId": "1.2.2",
    "kind": "layers",
    "title": "工业互联网平台四层",
    "subtitle": "从现场采集到业务应用的逐层支撑",
    "items": [
      {
        "label": "SaaS 业务应用",
        "detail": "为具体业务提供工业互联网应用与服务。"
      },
      {
        "label": "PaaS 平台能力",
        "detail": "工业平台服务、数据处理与通用能力封装。"
      },
      {
        "label": "IaaS 基础资源",
        "detail": "弹性计算、网络与存储等基础设施。"
      },
      {
        "label": "边缘层",
        "detail": "连接现场设备、接入采集生产数据。"
      }
    ],
    "center": "平台四层",
    "insight": "从下往上：边缘 → IaaS → PaaS → SaaS。",
    "sourcePage": 10
  },
  {
    "id": "c1-fusion",
    "chapterId": 1,
    "topicId": "1.3.2",
    "kind": "compare",
    "title": "两化融合四种表现",
    "subtitle": "题目常用案例场景考辨析",
    "items": [
      {
        "label": "技术融合",
        "detail": "信息技术与工业技术结合，产生新技术。"
      },
      {
        "label": "产品融合",
        "detail": "将信息技术嵌入工业产品，形成智能产品。"
      },
      {
        "label": "业务融合",
        "detail": "利用信息系统改造研发、生产、销售与管理流程。"
      },
      {
        "label": "产业衍生",
        "detail": "催生新产业、新企业和新业态。"
      }
    ],
    "center": "",
    "insight": "发明新技术=技术融合；智能产品=产品融合；ERP改流程=业务融合；新行业=产业衍生。",
    "sourcePage": 22
  },
  {
    "id": "c1-value",
    "chapterId": 1,
    "topicId": "1.4.1",
    "kind": "path",
    "title": "数据价值化“三化”",
    "subtitle": "从数据可用到创造价值，再到资本运作",
    "items": [
      {
        "label": "数据资源化",
        "detail": "采集、清洗、治理和加工，使原始数据变得可用。"
      },
      {
        "label": "数据资产化",
        "detail": "数据作为资产，通过应用或交易产生经济效益。"
      },
      {
        "label": "数据资本化",
        "detail": "数据资产通过融资等方式形成资本价值。"
      }
    ],
    "center": "",
    "insight": "资源化 → 资产化 → 资本化；注意不能跳过“资产化”。",
    "sourcePage": 28
  },
  {
    "id": "c1-economy",
    "chapterId": 1,
    "topicId": "1.4.1",
    "kind": "compare",
    "title": "数字经济的四部分",
    "subtitle": "四个概念之间是组成关系，不是先后阶段",
    "items": [
      {
        "label": "数字产业化",
        "detail": "数字产品制造与服务、数字技术应用、数字要素驱动。"
      },
      {
        "label": "产业数字化",
        "detail": "传统产业利用数字技术改造业务和生产。"
      },
      {
        "label": "数字化治理",
        "detail": "推动跨领域数据互通、协同管理和数据决策。"
      },
      {
        "label": "数据价值化",
        "detail": "使数据资源经治理和利用产生价值。"
      }
    ],
    "center": "",
    "insight": "“数字产业化”发展数字产业；“产业数字化”改造既有产业。",
    "sourcePage": 28
  },
  {
    "id": "c1-dikw",
    "chapterId": 1,
    "topicId": "1.5.1",
    "kind": "pyramid",
    "title": "DIKW 知识金字塔",
    "subtitle": "数据经加工理解，逐步形成决策智慧",
    "items": [
      {
        "label": "智慧 · Wisdom",
        "detail": "在知识基础上形成判断和决策能力。"
      },
      {
        "label": "知识 · Knowledge",
        "detail": "将信息总结为规则、经验和认识。"
      },
      {
        "label": "信息 · Information",
        "detail": "数据经过关联、解释后具有明确意义。"
      },
      {
        "label": "数据 · Data",
        "detail": "对事实的原始记录或符号表示。"
      }
    ],
    "center": "DIKW",
    "insight": "从下往上：数据 → 信息 → 知识 → 智慧。",
    "sourcePage": 39
  },
  {
    "id": "c2-network",
    "chapterId": 2,
    "topicId": "2.1.2",
    "kind": "layers",
    "title": "OSI 七层结构",
    "subtitle": "从用户应用到物理介质的分层视图",
    "items": [
      {
        "label": "应用层",
        "detail": "面向用户应用，典型如 HTTP、FTP 等。"
      },
      {
        "label": "表示层",
        "detail": "处理表示转换、加解密和压缩。"
      },
      {
        "label": "会话层",
        "detail": "建立、管理及终止会话。"
      },
      {
        "label": "传输层",
        "detail": "端到端传输；TCP 与 UDP 是典型协议。"
      },
      {
        "label": "网络层",
        "detail": "逻辑寻址与路由选择；典型如 IP。"
      },
      {
        "label": "数据链路层",
        "detail": "成帧、链路控制与物理寻址。"
      },
      {
        "label": "物理层",
        "detail": "承载物理信号和比特传输。"
      }
    ],
    "center": "OSI 七层",
    "insight": "TCP/IP 四层常归为：应用、传输、网络、网络接口层；两种层次模型不要混淆。",
    "sourcePage": 5
  },
  {
    "id": "c2-storage",
    "chapterId": 2,
    "topicId": "2.1.3",
    "kind": "compare",
    "title": "DAS / NAS / SAN 对比",
    "subtitle": "抓住“连接方式”和“传输对象”",
    "items": [
      {
        "label": "DAS 直连存储",
        "detail": "存储设备直接连接服务器，通常以数据块方式访问，部署简单但共享能力有限。"
      },
      {
        "label": "NAS 网络接入存储",
        "detail": "经普通 TCP/IP 网络提供文件共享，便于跨用户和异构系统访问。"
      },
      {
        "label": "SAN 存储区域网络",
        "detail": "使用专用存储网络提供块级访问，适用于大型系统与核心业务数据。"
      }
    ],
    "center": "",
    "insight": "DAS=直连/块；NAS=网络/文件；SAN=专网/块。",
    "sourcePage": 15
  },
  {
    "id": "c2-iot",
    "chapterId": 2,
    "topicId": "2.2.1",
    "kind": "layers",
    "title": "物联网三层架构",
    "subtitle": "从感知设备到传输再到业务服务",
    "items": [
      {
        "label": "应用层",
        "detail": "把物联网能力用于智慧生活、工业、城市治理等应用。"
      },
      {
        "label": "网络层",
        "detail": "通过互联网、广电网等实现可靠传输与连接。"
      },
      {
        "label": "感知层",
        "detail": "传感器、RFID、二维码、摄像头等进行识别、采集与感知。"
      }
    ],
    "center": "物联网",
    "insight": "感知层采数据，网络层传数据，应用层用数据。",
    "sourcePage": 37
  },
  {
    "id": "c2-cloud",
    "chapterId": 2,
    "topicId": "2.2.2",
    "kind": "compare",
    "title": "云服务 IaaS / PaaS / SaaS",
    "subtitle": "按服务提供的资源层级来区分",
    "items": [
      {
        "label": "IaaS 基础设施即服务",
        "detail": "提供计算、网络与存储等基础资源；使用者管理较多运行环境。"
      },
      {
        "label": "PaaS 平台即服务",
        "detail": "提供运行平台、数据库及开发环境；使用者聚焦应用开发。"
      },
      {
        "label": "SaaS 软件即服务",
        "detail": "提供现成应用软件，使用者直接使用服务。"
      }
    ],
    "center": "",
    "insight": "IaaS 租资源，PaaS 租平台，SaaS 用软件。",
    "sourcePage": 40
  },
  {
    "id": "c2-data",
    "chapterId": 2,
    "topicId": "2.2.3",
    "kind": "path",
    "title": "大数据处理链路",
    "subtitle": "从源数据到知识和业务价值",
    "items": [
      {
        "label": "数据准备",
        "detail": "数据采集和整合，完成必要清洗。"
      },
      {
        "label": "存储与管理",
        "detail": "处理海量数据的存储、调度、协同与安全问题。"
      },
      {
        "label": "分析与计算",
        "detail": "利用批处理或实时处理技术执行计算分析。"
      },
      {
        "label": "数据治理",
        "detail": "建立质量、标准、责任和控制机制。"
      },
      {
        "label": "知识展现",
        "detail": "以分析、可视化和服务支持决策。"
      }
    ],
    "center": "",
    "insight": "Hadoop 偏离线复杂处理；Spark 偏离线快速处理；Storm 偏在线实时处理。",
    "sourcePage": 45
  },
  {
    "id": "c2-blockchain",
    "chapterId": 2,
    "topicId": "2.2.4",
    "kind": "compare",
    "title": "区块链四类关键技术",
    "subtitle": "从结构、可信机制和执行三方面理解",
    "items": [
      {
        "label": "分布式账本",
        "detail": "数据复制分布在多个节点，降低单点依赖。"
      },
      {
        "label": "加密与哈希",
        "detail": "利用密码学支持身份、完整性、签名和防篡改检验。"
      },
      {
        "label": "共识机制",
        "detail": "节点按规则共同确认并维护账本状态。"
      },
      {
        "label": "智能合约",
        "detail": "用可执行脚本自动执行约定的业务规则。"
      }
    ],
    "center": "",
    "insight": "不要把“不可篡改”理解为任何条件下绝对不可能修改。",
    "sourcePage": 50
  },
  {
    "id": "c2-ai",
    "chapterId": 2,
    "topicId": "2.2.5",
    "kind": "compare",
    "title": "人工智能核心技术辨析",
    "subtitle": "看到“做什么”就联想到对应技术",
    "items": [
      {
        "label": "机器学习",
        "detail": "用数据训练模型自动归纳规律，支持预测和分类。"
      },
      {
        "label": "深度学习",
        "detail": "利用多层神经网络从数据中学习复杂特征。"
      },
      {
        "label": "自然语言处理 NLP",
        "detail": "让计算机理解、生成或处理人类语言。"
      },
      {
        "label": "专家系统",
        "detail": "整合领域知识和推理规则，模拟专家解决特定领域问题。"
      }
    ],
    "center": "",
    "insight": "语音转文字常考 NLP；模拟专家规则是专家系统；根据奖励优化策略是强化学习。",
    "sourcePage": 56
  },
  {
    "id": "c3-goals",
    "chapterId": 3,
    "topicId": "3.1.1",
    "kind": "triangle",
    "title": "IT 治理的三大目标",
    "subtitle": "组织战略导向下的价值与风险平衡",
    "items": [
      {
        "label": "业务目标一致",
        "detail": "IT战略与业务目标相协调，支撑业务发展。"
      },
      {
        "label": "有效利用资源",
        "detail": "合理利用 IT 与数据信息资源，提高价值交付能力。"
      },
      {
        "label": "风险管理",
        "detail": "识别和管理 IT 相关风险，保障业务与信息资产。"
      }
    ],
    "center": "IT 治理",
    "insight": "考点：与业务目标一致、有效利用信息与数据资源、风险管理。",
    "sourcePage": 3
  },
  {
    "id": "c3-core",
    "chapterId": 3,
    "topicId": "3.1.2",
    "kind": "wheel",
    "title": "IT 治理六项核心内容",
    "subtitle": "职责、战略、资源、价值、风险、绩效组成治理闭环",
    "items": [
      {
        "label": "组织职责",
        "detail": "界定所有者、建设者、管理者和监控者的责任关系。"
      },
      {
        "label": "战略匹配",
        "detail": "确保信息系统建设与组织业务目标匹配。"
      },
      {
        "label": "资源管理",
        "detail": "统筹人员、技术、平台、信息和资金等资源。"
      },
      {
        "label": "价值交付",
        "detail": "以业务价值衡量 IT 投入产生的成果。"
      },
      {
        "label": "风险管理",
        "detail": "确保资产安全、稳定与连续性并进行风险控制。"
      },
      {
        "label": "绩效管理",
        "detail": "衡量战略、项目、资源和服务的绩效。"
      }
    ],
    "center": "IT治理",
    "insight": "口诀可记“责—战—资—值—险—绩”。",
    "sourcePage": 5
  },
  {
    "id": "c3-tasks",
    "chapterId": 3,
    "topicId": "3.1.3",
    "kind": "wheel",
    "title": "IT 治理五项主要任务",
    "subtitle": "五个相互支持的治理活动方向",
    "items": [
      {
        "label": "全局统筹",
        "detail": "明确治理定位、责任与发展蓝图。"
      },
      {
        "label": "价值导向",
        "detail": "管理 IT 投资与效益，确保价值可衡量。"
      },
      {
        "label": "机制保障",
        "detail": "规范制度、过程和合规审计。"
      },
      {
        "label": "创新发展",
        "detail": "推动管理、技术与业务创新。"
      },
      {
        "label": "文化助推",
        "detail": "营造沟通、变革与合规文化。"
      }
    ],
    "center": "治理任务",
    "insight": "全局、价值、机制、创新、文化。",
    "sourcePage": 6
  },
  {
    "id": "c3-cobit",
    "chapterId": 3,
    "topicId": "3.1.4",
    "kind": "layers",
    "title": "COBIT 治理与管理领域",
    "subtitle": "EDM 负责治理，APO/BAI/DSS/MEA 负责管理",
    "items": [
      {
        "label": "EDM · 评估、指导和监控",
        "detail": "董事会与执行管理层负责治理目标。"
      },
      {
        "label": "APO · 调整、规划和组织",
        "detail": "组织整体 IT 战略、规划与支持活动。"
      },
      {
        "label": "BAI · 内部构建、外部采购和实施",
        "detail": "IT 解决方案定义、采购、实施与业务集成。"
      },
      {
        "label": "DSS · 交付、服务和支持",
        "detail": "IT 服务运营、交付、支持及安全。"
      },
      {
        "label": "MEA · 监控、评价和评估",
        "detail": "监控绩效与内部控制，核对外部要求的符合性。"
      }
    ],
    "center": "COBIT",
    "insight": "治理目标是 EDM；其余 APO、BAI、DSS、MEA 属于管理目标。",
    "sourcePage": 9
  },
  {
    "id": "c3-auditrisk",
    "chapterId": 3,
    "topicId": "3.2.1",
    "kind": "compare",
    "title": "IT 审计风险的四种概念",
    "subtitle": "结合风险发生位置和审计检出环节辨认",
    "items": [
      {
        "label": "固有风险",
        "detail": "假设没有内部控制时，IT活动本身可能发生重大错报的风险。"
      },
      {
        "label": "控制风险",
        "detail": "相关内部控制未能预防或发现并纠正重大问题的风险。"
      },
      {
        "label": "检查风险",
        "detail": "审计程序没有发现重大错报的风险。"
      },
      {
        "label": "总体审计风险",
        "detail": "综合考虑各类审计风险后的整体风险。"
      }
    ],
    "center": "",
    "insight": "固有风险是客观存在的风险；控制风险与内部控制有效性有关；检查风险与审计程序有关。",
    "sourcePage": 14
  },
  {
    "id": "c3-auditflow",
    "chapterId": 3,
    "topicId": "3.2.3",
    "kind": "path",
    "title": "IT 审计四阶段流程",
    "subtitle": "每阶段的工作职责容易命题",
    "items": [
      {
        "label": "审计准备",
        "detail": "明确目的、组建团队、收集资料并编制审计计划。"
      },
      {
        "label": "审计实施",
        "detail": "完善审计计划，了解和测试内部控制，开展符合性与实质性测试。"
      },
      {
        "label": "审计终结",
        "detail": "整理工作底稿与证据，形成审计结论并出具报告。"
      },
      {
        "label": "后续审计",
        "detail": "检查建议落实情况，评价整改措施的实际成效。"
      }
    ],
    "center": "",
    "insight": "准备—实施—终结—后续；“深入调查调整计划”属于实施阶段。",
    "sourcePage": 24
  },
  {
    "id": "c3-evidence",
    "chapterId": 3,
    "topicId": "3.2.2",
    "kind": "wheel",
    "title": "审计证据五项特征",
    "subtitle": "回答“什么证据才可用于形成审计结论”",
    "items": [
      {
        "label": "充分性",
        "detail": "证据数量满足要求，与抽样规模有关。"
      },
      {
        "label": "客观性",
        "detail": "证据应客观存在而非主观臆测。"
      },
      {
        "label": "相关性",
        "detail": "证据与审计事项具有实质联系。"
      },
      {
        "label": "可靠性",
        "detail": "证据来源及形成方式值得信赖。"
      },
      {
        "label": "合法性",
        "detail": "证据依法依规取得。"
      }
    ],
    "center": "审计证据",
    "insight": "“充分”看数量；“可靠”看质量；“相关”看与事项是否有关。",
    "sourcePage": 20
  },
  {
    "id": "c4-triangle",
    "chapterId": 4,
    "topicId": "4.1.2",
    "kind": "triangle",
    "title": "信息系统战略三角",
    "subtitle": "业务战略、组织机制与信息系统必须一致",
    "items": [
      {
        "label": "业务战略",
        "detail": "明确竞争优势与组织发展的业务目标。"
      },
      {
        "label": "组织机制",
        "detail": "通过结构与流程组织资源，实现业务战略。"
      },
      {
        "label": "信息系统",
        "detail": "为组织提供信息和系统能力，支持业务战略落地。"
      }
    ],
    "center": "战略一致性",
    "insight": "三个顶点：业务战略—组织机制—信息系统。",
    "sourcePage": 4
  },
  {
    "id": "c4-arch",
    "chapterId": 4,
    "topicId": "4.1.3",
    "kind": "compare",
    "title": "三种体系架构怎么选",
    "subtitle": "用系统部署方式与使用场景记忆",
    "items": [
      {
        "label": "集中式架构",
        "detail": "关键系统和数据集中于中心机房，便于统一管理，适合集中治理。"
      },
      {
        "label": "分布式架构",
        "detail": "功能与计算分布于多个节点，可扩展性和模块化较强。"
      },
      {
        "label": "面向服务 SOA",
        "detail": "把业务功能组织成可复用的服务，便于系统整合和快速组合。"
      }
    ],
    "center": "",
    "insight": "集中重统一；分布重扩展；SOA 重服务复用。",
    "sourcePage": 8
  },
  {
    "id": "c4-itil",
    "chapterId": 4,
    "topicId": "4.1.4",
    "kind": "compare",
    "title": "四个易混 IT 服务管理活动",
    "subtitle": "把处理故障、找根因、调整系统与记录配置分开",
    "items": [
      {
        "label": "事件管理",
        "detail": "发生中断时尽快恢复正常服务。"
      },
      {
        "label": "问题管理",
        "detail": "分析根本原因，预防问题重复发生。"
      },
      {
        "label": "变更管理",
        "detail": "审查控制系统变更带来的风险。"
      },
      {
        "label": "配置管理",
        "detail": "维护配置项信息及其相互关系。"
      }
    ],
    "center": "",
    "insight": "事件=恢复；问题=根因；变更=风险；配置=信息及关系。",
    "sourcePage": 13
  },
  {
    "id": "c4-pdca",
    "chapterId": 4,
    "topicId": "4.1.5",
    "kind": "cycle",
    "title": "PDCA 持续改进环",
    "subtitle": "改善流程的四步循环",
    "items": [
      {
        "label": "Plan · 计划",
        "detail": "确立目标、找出问题并制定计划。"
      },
      {
        "label": "Do · 执行",
        "detail": "按计划实施改进措施。"
      },
      {
        "label": "Check · 检查",
        "detail": "检查实施结果与预设目标的差距。"
      },
      {
        "label": "Act · 处理",
        "detail": "固化有效做法，并为下一轮改进提供输入。"
      }
    ],
    "center": "PDCA",
    "insight": "Plan → Do → Check → Act，形成持续迭代。",
    "sourcePage": 16
  },
  {
    "id": "c4-dmaic",
    "chapterId": 4,
    "topicId": "4.1.5",
    "kind": "path",
    "title": "DMAIC / DMADV 五阶段",
    "subtitle": "对 PDCA 的五阶段延伸",
    "items": [
      {
        "label": "Define · 定义",
        "detail": "明确待优化系统、核心流程与团队。"
      },
      {
        "label": "Measure · 度量",
        "detail": "明确指标、流程基线及度量方法。"
      },
      {
        "label": "Analyze · 分析",
        "detail": "找出异常来源、价值流问题与改进驱动因素。"
      },
      {
        "label": "Improve / Design · 改进或设计",
        "detail": "制定、验证新的方案或设计。"
      },
      {
        "label": "Control / Verify · 控制或验证",
        "detail": "固化和检验结果，持续追踪并总结经验。"
      }
    ],
    "center": "",
    "insight": "DMAIC 的 I/C 是改进/控制；DMADV 的 D/V 是设计/验证。",
    "sourcePage": 16
  },
  {
    "id": "c4-dcmm",
    "chapterId": 4,
    "topicId": "4.2.1",
    "kind": "wheel",
    "title": "DCMM 八大能力域",
    "subtitle": "数据管理能力成熟度模型的核心内容",
    "items": [
      {
        "label": "数据战略",
        "detail": "规划、实施和评估数据战略。"
      },
      {
        "label": "数据治理",
        "detail": "组织、制度建设与沟通。"
      },
      {
        "label": "数据架构",
        "detail": "模型、分布、集成共享与元数据管理。"
      },
      {
        "label": "数据应用",
        "detail": "数据分析、开放共享与服务。"
      },
      {
        "label": "数据安全",
        "detail": "安全策略、管理与审计。"
      },
      {
        "label": "数据质量",
        "detail": "需求、检查、分析与提升。"
      },
      {
        "label": "数据标准",
        "detail": "术语、主数据、数据元与指标数据。"
      },
      {
        "label": "数据生存周期",
        "detail": "需求、开发、运维与退役。"
      }
    ],
    "center": "DCMM",
    "insight": "八域：战略、治理、架构、应用、安全、质量、标准、生存周期。",
    "sourcePage": 19
  },
  {
    "id": "c4-maturity",
    "chapterId": 4,
    "topicId": "4.2.1",
    "kind": "pyramid",
    "title": "DCMM 五级成熟度",
    "subtitle": "从无统一流程到持续优化",
    "items": [
      {
        "label": "优化级",
        "detail": "持续优化并形成领先实践。"
      },
      {
        "label": "量化管理级",
        "detail": "以量化分析和监控驱动管理。"
      },
      {
        "label": "稳健级",
        "detail": "建立标准化流程并在组织范围执行。"
      },
      {
        "label": "受管理级",
        "detail": "数据被视为资产，建立基础管理流程。"
      },
      {
        "label": "初始级",
        "detail": "以项目为中心，管理较被动且缺少统一流程。"
      }
    ],
    "center": "成熟度",
    "insight": "由低到高：初始 → 受管理 → 稳健 → 量化管理 → 优化。",
    "sourcePage": 26
  },
  {
    "id": "c4-aiops",
    "chapterId": 4,
    "topicId": "4.2.2",
    "kind": "path",
    "title": "智能运维场景四步实现",
    "subtitle": "将场景建设与效果验证串起来",
    "items": [
      {
        "label": "场景分析",
        "detail": "识别需求、运维问题和实现目标。"
      },
      {
        "label": "场景构建",
        "detail": "建立数据、模型、流程与相应能力。"
      },
      {
        "label": "场景交付",
        "detail": "完成运维场景上线及应用交付。"
      },
      {
        "label": "效果评估",
        "detail": "评估质量、安全、效率、成本等实际成效。"
      }
    ],
    "center": "",
    "insight": "场景分析 → 场景构建 → 场景交付 → 效果评估。",
    "sourcePage": 28
  },
  {
    "id": "c4-cia",
    "chapterId": 4,
    "topicId": "4.2.3",
    "kind": "triangle",
    "title": "信息安全 CIA 三元组",
    "subtitle": "最常见的三项安全属性",
    "items": [
      {
        "label": "保密性 C",
        "detail": "限制未经授权的访问与披露。"
      },
      {
        "label": "完整性 I",
        "detail": "防止信息被未经授权地篡改或损坏。"
      },
      {
        "label": "可用性 A",
        "detail": "确保授权主体在需要时可正常使用信息。"
      }
    ],
    "center": "信息安全",
    "insight": "C=保密性，I=完整性，A=可用性。",
    "sourcePage": 29
  },
  {
    "id": "c4-mlps",
    "chapterId": 4,
    "topicId": "4.2.3",
    "kind": "pyramid",
    "title": "网络安全等级保护五级",
    "subtitle": "按受损害对象及严重程度逐级提高",
    "items": [
      {
        "label": "第五级",
        "detail": "国家安全受到特别严重损害。"
      },
      {
        "label": "第四级",
        "detail": "国家安全受到严重损害，或社会利益特别严重损害。"
      },
      {
        "label": "第三级",
        "detail": "国家安全受到损害，或社会公共利益严重损害。"
      },
      {
        "label": "第二级",
        "detail": "社会公共利益受到损害，或个人合法权益严重损害。"
      },
      {
        "label": "第一级",
        "detail": "个人或组织合法权益受到一般损害。"
      }
    ],
    "center": "等保等级",
    "insight": "从一级到五级，防护要求逐级提高；此图仅作教材概念记忆。",
    "sourcePage": 29
  },
  {
    "id": "c5-styles",
    "chapterId": 5,
    "topicId": "5.1.1",
    "kind": "compare",
    "title": "五大软件架构风格",
    "subtitle": "按构件协作方式理解，而非机械背名称",
    "items": [
      {
        "label": "数据流",
        "detail": "管道/过滤器和批处理序列，围绕数据传递。"
      },
      {
        "label": "调用/返回",
        "detail": "主子程序、面向对象与层次结构。"
      },
      {
        "label": "独立构件",
        "detail": "事件驱动与进程通信。"
      },
      {
        "label": "虚拟机",
        "detail": "解释器与基于规则的系统。"
      },
      {
        "label": "仓库",
        "detail": "数据库、黑板系统、超文本系统。"
      }
    ],
    "center": "",
    "insight": "数据流=管道；独立构件=事件；虚拟机=解释；仓库=共享数据。",
    "sourcePage": 3
  },
  {
    "id": "c5-sa",
    "chapterId": 5,
    "topicId": "5.1.2",
    "kind": "triangle",
    "title": "结构化分析三个模型",
    "subtitle": "数据字典统领实体、功能、行为三方面",
    "items": [
      {
        "label": "E-R 数据模型",
        "detail": "描述实体、属性和实体间关系。"
      },
      {
        "label": "DFD 功能模型",
        "detail": "描述数据流转与业务加工过程。"
      },
      {
        "label": "STD 行为模型",
        "detail": "描述系统状态与状态转移。"
      }
    ],
    "center": "数据字典 DD",
    "insight": "实数·能流·形状；核心是数据字典。",
    "sourcePage": 5
  },
  {
    "id": "c5-uml",
    "chapterId": 5,
    "topicId": "5.1.2",
    "kind": "compare",
    "title": "UML 常用类关系对照",
    "subtitle": "类图题目中最容易混淆的六种关系",
    "items": [
      {
        "label": "依赖",
        "detail": "使用关系，变化可能影响另一方。"
      },
      {
        "label": "关联",
        "detail": "对象之间存在静态结构连接。"
      },
      {
        "label": "泛化",
        "detail": "继承：子类与父类的一般/特殊关系。"
      },
      {
        "label": "聚合",
        "detail": "整体-部分的弱拥有关系，部分可独立存在。"
      },
      {
        "label": "组合",
        "detail": "整体-部分的强拥有关系，生命周期关联强。"
      },
      {
        "label": "实现",
        "detail": "实现类满足接口契约。"
      }
    ],
    "center": "",
    "insight": "泛化/实现不要混；聚合与组合看生命周期与所有权。",
    "sourcePage": 8
  },
  {
    "id": "c5-ood",
    "chapterId": 5,
    "topicId": "5.1.3",
    "kind": "wheel",
    "title": "七项面向对象设计原则",
    "subtitle": "从职责、扩展、依赖、接口和复用角度判别",
    "items": [
      {
        "label": "单一职责",
        "detail": "一个类尽量只承担一类职责。"
      },
      {
        "label": "开闭",
        "detail": "扩展开放、修改封闭。"
      },
      {
        "label": "里氏替换",
        "detail": "子类可以代替父类。"
      },
      {
        "label": "依赖倒置",
        "detail": "依赖抽象，而不是具体实现。"
      },
      {
        "label": "接口隔离",
        "detail": "不强迫依赖不需要的接口。"
      },
      {
        "label": "组合重用",
        "detail": "复用优先通过组合。"
      },
      {
        "label": "迪米特",
        "detail": "最少知识，减少对象耦合。"
      }
    ],
    "center": "OOD 设计原则",
    "insight": "接口抽象看依赖倒置；减少对象了解看迪米特。",
    "sourcePage": 13
  },
  {
    "id": "c5-tests",
    "chapterId": 5,
    "topicId": "5.1.4",
    "kind": "compare",
    "title": "静态、黑盒、白盒测试",
    "subtitle": "按是否执行以及关注内外部结构来判题",
    "items": [
      {
        "label": "静态测试",
        "detail": "不运行程序，文档检查、代码走查、审查。"
      },
      {
        "label": "黑盒测试",
        "detail": "动态执行，关注输入输出，等价类、边界值、判定表。"
      },
      {
        "label": "白盒测试",
        "detail": "动态执行，关注逻辑结构，控制流、覆盖与路径。"
      }
    ],
    "center": "",
    "insight": "“黑盒”与“白盒”均属动态测试；代码审查属静态。",
    "sourcePage": 18
  },
  {
    "id": "c5-ship",
    "chapterId": 5,
    "topicId": "5.1.5",
    "kind": "path",
    "title": "镜像部署 Build / Ship / Run",
    "subtitle": "持续部署可以按构建、分发、运行组织",
    "items": [
      {
        "label": "Build",
        "detail": "从源码和依赖构建制品或镜像。"
      },
      {
        "label": "Ship",
        "detail": "将制品或镜像可靠分发到各目标环境。"
      },
      {
        "label": "Run",
        "detail": "在目标环境启动、检查并运行。"
      }
    ],
    "center": "",
    "insight": "构建、分发、运行；区分持续交付与自动上线。",
    "sourcePage": 21
  },
  {
    "id": "c5-release",
    "chapterId": 5,
    "topicId": "5.1.5",
    "kind": "compare",
    "title": "蓝绿部署与金丝雀部署",
    "subtitle": "两种常见上线策略的决策核心",
    "items": [
      {
        "label": "蓝绿部署",
        "detail": "保留两套环境，通过切换流量完成发布或回退。"
      },
      {
        "label": "金丝雀部署",
        "detail": "先少量用户验证，再逐步增加新版本流量。"
      },
      {
        "label": "不可变服务器",
        "detail": "使用新实例替换旧实例，减少在原机器上直接修改。"
      }
    ],
    "center": "",
    "insight": "双环境切换=蓝绿；逐步放量=金丝雀。",
    "sourcePage": 21
  },
  {
    "id": "c5-csmm",
    "chapterId": 5,
    "topicId": "5.1.6",
    "kind": "pyramid",
    "title": "CSMM 软件过程成熟度五级",
    "subtitle": "软件过程能力从个人经验走向量化与创新",
    "items": [
      {
        "label": "初始级",
        "detail": "缺乏完整管理规范，结果有不确定性。"
      },
      {
        "label": "项目规范级",
        "detail": "项目按计划推进，有基本过程管理。"
      },
      {
        "label": "组织改进级",
        "detail": "组织范围稳定实现目标。"
      },
      {
        "label": "量化提升级",
        "detail": "量化评估项目过程绩效。"
      },
      {
        "label": "创新引领级",
        "detail": "持续创新与组织改进。"
      }
    ],
    "center": "",
    "insight": "CSMM 不等于安全工程的 ISSE-CMM。",
    "sourcePage": 23
  },
  {
    "id": "c5-model",
    "chapterId": 5,
    "topicId": "5.2.1",
    "kind": "path",
    "title": "数据建模四阶段",
    "subtitle": "先理解业务，再设计数据结构与存储实现",
    "items": [
      {
        "label": "数据需求",
        "detail": "明确系统应当存什么数据。"
      },
      {
        "label": "概念模型",
        "detail": "实体、属性、关联：E-R 图。"
      },
      {
        "label": "逻辑模型",
        "detail": "把概念转换为关系模式及约束。"
      },
      {
        "label": "物理模型",
        "detail": "明确字段、索引、存储、具体 DBMS 实现。"
      }
    ],
    "center": "",
    "insight": "数据需求→概念→逻辑→物理；模型层次逐步落地。",
    "sourcePage": 32
  },
  {
    "id": "c5-standard",
    "chapterId": 5,
    "topicId": "5.2.2",
    "kind": "wheel",
    "title": "数据标准化五方面",
    "subtitle": "保证数据共享交换时“说的是同一种语言”",
    "items": [
      {
        "label": "元数据",
        "detail": "规范描述信息。"
      },
      {
        "label": "数据元",
        "detail": "规范单个数据单位。"
      },
      {
        "label": "数据模式",
        "detail": "规范共享与交换数据结构。"
      },
      {
        "label": "分类编码",
        "detail": "规范分类与一一编码。"
      },
      {
        "label": "标准化管理",
        "detail": "标准的制定、审批、实施和维护。"
      }
    ],
    "center": "数据标准",
    "insight": "元数据是“数据说明”；数据元是“数据单元”。",
    "sourcePage": 36
  },
  {
    "id": "c5-backup",
    "chapterId": 5,
    "topicId": "5.2.3",
    "kind": "compare",
    "title": "三种数据备份策略",
    "subtitle": "理解备份范围，才能判断恢复链",
    "items": [
      {
        "label": "完全备份",
        "detail": "当前范围全部复制；恢复较直接。"
      },
      {
        "label": "差分备份",
        "detail": "自上次全备份以来所有变化。"
      },
      {
        "label": "增量备份",
        "detail": "自上次任意备份以来所有变化，恢复依赖链。"
      }
    ],
    "center": "",
    "insight": "差分以“上次全备”为起点；增量以“上次备份”为起点。",
    "sourcePage": 42
  },
  {
    "id": "c5-rpo",
    "chapterId": 5,
    "topicId": "5.2.3",
    "kind": "compare",
    "title": "RPO 与 RTO",
    "subtitle": "一个关注数据损失，一个关注恢复时间",
    "items": [
      {
        "label": "RPO 恢复点目标",
        "detail": "灾难后允许丢失的数据时间跨度或数据量。"
      },
      {
        "label": "RTO 恢复时间目标",
        "detail": "灾难后允许系统恢复所花费的时间。"
      }
    ],
    "center": "",
    "insight": "RPO：最多丢多少；RTO：多久恢复。",
    "sourcePage": 43
  },
  {
    "id": "c5-mining",
    "chapterId": 5,
    "topicId": "5.2.4",
    "kind": "path",
    "title": "数据挖掘五阶段",
    "subtitle": "从确定问题到结果在业务中应用",
    "items": [
      {
        "label": "对象确定",
        "detail": "明确分析对象与目标。"
      },
      {
        "label": "数据准备",
        "detail": "处理数据质量、格式与样本。"
      },
      {
        "label": "数据挖掘",
        "detail": "用数据方法探索规律。"
      },
      {
        "label": "结果评估",
        "detail": "评价发现是否有效。"
      },
      {
        "label": "结果应用",
        "detail": "在业务分析与决策中使用。"
      }
    ],
    "center": "",
    "insight": "对象→准备→挖掘→评估→应用。",
    "sourcePage": 45
  },
  {
    "id": "c5-integrate",
    "chapterId": 5,
    "topicId": "5.3.3",
    "kind": "layers",
    "title": "数据集成四个层次",
    "subtitle": "解决异构数据中的身份、视图、模式、粒度问题",
    "items": [
      {
        "label": "基本集成",
        "detail": "识别不同系统同一对象。"
      },
      {
        "label": "多级视图",
        "detail": "整合不同视图或格式。"
      },
      {
        "label": "模式集成",
        "detail": "统一概念、关系结构和字段语义。"
      },
      {
        "label": "多粒度集成",
        "detail": "协调小时、日、月等不同数据粒度。"
      }
    ],
    "center": "",
    "insight": "先对应对象，再协调视图、模式与粒度。",
    "sourcePage": 60
  },
  {
    "id": "c5-secure",
    "chapterId": 5,
    "topicId": "5.4.2",
    "kind": "triangle",
    "title": "信息安全系统三维空间",
    "subtitle": "三个正交视角共同表达安全方案",
    "items": [
      {
        "label": "X 安全机制",
        "detail": "基础设施、平台、数据、应用、运行等安全机制。"
      },
      {
        "label": "Y OSI 参考模型",
        "detail": "网络各层的保护视角。"
      },
      {
        "label": "Z 安全服务",
        "detail": "认证、保密、完整性、禁止否认等安全服务。"
      }
    ],
    "center": "安全三维空间",
    "insight": "三轴分别是安全机制、OSI、服务；不要与五大安全属性混淆。",
    "sourcePage": 69
  },
  {
    "id": "c5-isse",
    "chapterId": 5,
    "topicId": "5.4.4",
    "kind": "pyramid",
    "title": "ISSE-CMM 的五级成熟度",
    "subtitle": "信息安全系统工程的过程能力分级",
    "items": [
      {
        "label": "Level 1 非正规实施",
        "detail": "过程实施初步、规范性较弱。"
      },
      {
        "label": "Level 2 规划跟踪",
        "detail": "有计划、规范化执行、验证和跟踪。"
      },
      {
        "label": "Level 3 充分定义",
        "detail": "标准化过程并协调安全措施。"
      },
      {
        "label": "Level 4 量化控制",
        "detail": "设定量化目标并管理。"
      },
      {
        "label": "Level 5 持续改进",
        "detail": "改进组织能力和过程效果。"
      }
    ],
    "center": "",
    "insight": "安全工程 ISSE 五级别与软件 CSMM 名称不同。",
    "sourcePage": 72
  },
  {
    "id": "c6-type",
    "chapterId": 6,
    "topicId": "6.2.4",
    "kind": "compare",
    "title": "项目、项目集、项目组合、运营",
    "subtitle": "四类管理对象的目标和边界",
    "items": [
      {
        "label": "项目",
        "detail": "交付独特成果，关注项目目标。"
      },
      {
        "label": "项目集",
        "detail": "协调关联项目，关注综合收益。"
      },
      {
        "label": "项目组合",
        "detail": "匹配战略，确定优先级与资源投放。"
      },
      {
        "label": "运营",
        "detail": "持续生产、持续提供服务。"
      }
    ],
    "center": "",
    "insight": "组合看战略，项目集看收益，项目看交付，运营看持续。",
    "sourcePage": 10
  },
  {
    "id": "c6-opa",
    "chapterId": 6,
    "topicId": "6.2.5",
    "kind": "compare",
    "title": "组织过程资产 OPA / 事业环境因素 EEF",
    "subtitle": "考试最常见的两类环境要素比较",
    "items": [
      {
        "label": "OPA 组织过程资产",
        "detail": "模板、历史资料、流程与知识库：组织积累且可复用。"
      },
      {
        "label": "EEF 事业环境因素",
        "detail": "组织文化、基础设施、法律、市场等，需要适应的制约。"
      }
    ],
    "center": "",
    "insight": "内部环境不一定是 OPA；外部环境通常是 EEF。",
    "sourcePage": 15
  },
  {
    "id": "c6-org",
    "chapterId": 6,
    "topicId": "6.2.6",
    "kind": "compare",
    "title": "五类组织结构与项目经理权限",
    "subtitle": "从职能型到项目型，资源与管理权限逐渐倾斜",
    "items": [
      {
        "label": "职能型",
        "detail": "部门主导；项目经理权限很少。"
      },
      {
        "label": "弱矩阵",
        "detail": "多为兼职协调者；资源仍由职能经理控制。"
      },
      {
        "label": "均衡矩阵",
        "detail": "项目经理与职能经理协商。"
      },
      {
        "label": "强矩阵",
        "detail": "项目经理权限较高，通常全职。"
      },
      {
        "label": "项目导向型",
        "detail": "资源与项目管理权高度集中于项目组。"
      }
    ],
    "center": "",
    "insight": "辨析项目经理全职/兼职与预算、资源归属。",
    "sourcePage": 18
  },
  {
    "id": "c6-pmo",
    "chapterId": 6,
    "topicId": "6.2.6",
    "kind": "compare",
    "title": "PMO 三种类型",
    "subtitle": "看 PMO 对项目的控制程度",
    "items": [
      {
        "label": "支持型",
        "detail": "模板、培训、最佳实践，控制程度低。"
      },
      {
        "label": "控制型",
        "detail": "要求项目遵守方法与标准，控制程度中等。"
      },
      {
        "label": "指令型",
        "detail": "直接管理项目并指定项目经理，控制程度高。"
      }
    ],
    "center": "",
    "insight": "支持→控制→指令：约束和管理权逐级增强。",
    "sourcePage": 21
  },
  {
    "id": "c6-roles",
    "chapterId": 6,
    "topicId": "6.3.1",
    "kind": "compare",
    "title": "三种经理的职责边界",
    "subtitle": "项目、职能和运营分别管什么",
    "items": [
      {
        "label": "职能经理",
        "detail": "对职能部门活动负责。"
      },
      {
        "label": "运营经理",
        "detail": "对持续性服务与运营效率负责。"
      },
      {
        "label": "项目经理",
        "detail": "领导项目团队，达成项目目标。"
      }
    ],
    "center": "",
    "insight": "项目经理以项目目标为中心，不等同于职能或运营经理。",
    "sourcePage": 26
  },
  {
    "id": "c6-skill",
    "chapterId": 6,
    "topicId": "6.3.2",
    "kind": "triangle",
    "title": "项目经理能力三角",
    "subtitle": "管理方法、商业理解与影响力相互支持",
    "items": [
      {
        "label": "项目管理技能",
        "detail": "计划、实施与控制项目工作。"
      },
      {
        "label": "战略与商务技能",
        "detail": "理解业务模式、组织战略与商业环境。"
      },
      {
        "label": "领导力技能",
        "detail": "激励、沟通、协作并带领团队。"
      }
    ],
    "center": "PM 技能三角",
    "insight": "三大技能相互配合，不要把领导力误认成纯技术。",
    "sourcePage": 28
  },
  {
    "id": "c6-lead",
    "chapterId": 6,
    "topicId": "6.3.3",
    "kind": "compare",
    "title": "领导力和管理的差异",
    "subtitle": "按关键词识别管理还是领导",
    "items": [
      {
        "label": "管理",
        "detail": "职位权力、维护、控制、短期目标与系统架构。"
      },
      {
        "label": "领导力",
        "detail": "影响力、信任、创新、愿景与挑战现状。"
      },
      {
        "label": "服务型领导",
        "detail": "先服务他人，重视成长、自主性与福利。"
      }
    ],
    "center": "",
    "insight": "维护与控制更像管理；愿景、信任、创新更像领导。",
    "sourcePage": 29
  },
  {
    "id": "c6-principles",
    "chapterId": 6,
    "topicId": "6.4.1",
    "kind": "wheel",
    "title": "十二项原则的六个记忆簇",
    "subtitle": "两两组合记忆，详细原文见本节知识卡",
    "items": [
      {
        "label": "责任与团队",
        "detail": "勤勉、尊重和关心他人；营造协作团队。"
      },
      {
        "label": "干系人与价值",
        "detail": "促进有效参与；聚焦于价值。"
      },
      {
        "label": "系统与领导",
        "detail": "识别和响应系统交互；展现领导力。"
      },
      {
        "label": "裁剪与质量",
        "detail": "根据环境裁剪；将质量融入过程和成果。"
      },
      {
        "label": "复杂与风险",
        "detail": "驾驭复杂性；优化风险应对。"
      },
      {
        "label": "韧性与变革",
        "detail": "拥抱适应性和韧性；驱动变革。"
      }
    ],
    "center": "十二原则",
    "insight": "六簇×两项=十二原则；图解是辅助记忆，不改变原原则名称。",
    "sourcePage": 33
  },
  {
    "id": "c6-lifecycle",
    "chapterId": 6,
    "topicId": "6.4.2",
    "kind": "compare",
    "title": "五种开发生命周期",
    "subtitle": "从需求确定程度、交付频次和变化节奏进行区分",
    "items": [
      {
        "label": "预测型",
        "detail": "早期确定需求与计划，较少变更。"
      },
      {
        "label": "迭代型",
        "detail": "循环改进产品。"
      },
      {
        "label": "增量型",
        "detail": "分批增加产品功能。"
      },
      {
        "label": "适应型",
        "detail": "快速迭代并频繁交付，持续获得反馈。"
      },
      {
        "label": "混合型",
        "detail": "预测型和适应型结合。"
      }
    ],
    "center": "",
    "insight": "迭代=反复改，增量=逐步加，适应=既改又交付。",
    "sourcePage": 45
  },
  {
    "id": "c6-stages",
    "chapterId": 6,
    "topicId": "6.4.2",
    "kind": "path",
    "title": "项目生命周期四个阶段",
    "subtitle": "与五大管理过程组不是一回事",
    "items": [
      {
        "label": "启动项目",
        "detail": "建立项目概念与目标。"
      },
      {
        "label": "组织与准备",
        "detail": "开展资源与管理准备。"
      },
      {
        "label": "执行项目工作",
        "detail": "建设和交付项目成果。"
      },
      {
        "label": "结束项目",
        "detail": "完成交接和项目结束。"
      }
    ],
    "center": "",
    "insight": "“阶段”描述项目时间结构，“过程组”描述管理活动。",
    "sourcePage": 44
  },
  {
    "id": "c6-groups",
    "chapterId": 6,
    "topicId": "6.4.3",
    "kind": "path",
    "title": "五大项目管理过程组",
    "subtitle": "可在项目或迭代中重复开展",
    "items": [
      {
        "label": "启动",
        "detail": "定义并授权项目或阶段。"
      },
      {
        "label": "规划",
        "detail": "确定目标、范围和行动路线。"
      },
      {
        "label": "执行",
        "detail": "按计划完成工作。"
      },
      {
        "label": "监控",
        "detail": "跟踪、分析、调整并实施必要变更。"
      },
      {
        "label": "收尾",
        "detail": "正式关闭项目、阶段或合同。"
      }
    ],
    "center": "",
    "insight": "启动→规划→执行→监控→收尾，监控贯穿过程且可重叠。",
    "sourcePage": 50
  },
  {
    "id": "c6-itto",
    "chapterId": 6,
    "topicId": "6.4.4",
    "kind": "path",
    "title": "ITTO 输入→技术→输出",
    "subtitle": "每个过程可看成工作流模型",
    "items": [
      {
        "label": "Input 输入",
        "detail": "需要的计划、资料、约束或依据。"
      },
      {
        "label": "Tools & Techniques",
        "detail": "用于加工分析输入的工具与技术。"
      },
      {
        "label": "Output 输出",
        "detail": "产出交付成果、计划、更新和管理文件。"
      }
    ],
    "center": "",
    "insight": "一个过程的输出可以是另一个过程的输入。",
    "sourcePage": 56
  },
  {
    "id": "c6-domains",
    "chapterId": 6,
    "topicId": "6.4.5",
    "kind": "wheel",
    "title": "八大项目绩效域",
    "subtitle": "持续关注且相互联动的八个方面",
    "items": [
      {
        "label": "干系人",
        "detail": "有效识别并促使干系人参与。"
      },
      {
        "label": "团队",
        "detail": "协作、授权与能力发展。"
      },
      {
        "label": "开发方法与生命周期",
        "detail": "依据情境选择合适的开发与交付节奏。"
      },
      {
        "label": "规划",
        "detail": "随信息增多持续细化计划。"
      },
      {
        "label": "项目工作",
        "detail": "组织并推进工作。"
      },
      {
        "label": "交付",
        "detail": "实现符合目标的成果。"
      },
      {
        "label": "测量",
        "detail": "通过指标与反馈了解绩效。"
      },
      {
        "label": "不确定性",
        "detail": "识别风险、机会及模糊性。"
      }
    ],
    "center": "项目绩效域",
    "insight": "八域不是八个互相独立的项目阶段。",
    "sourcePage": 60
  },
  {
    "id": "c6-value",
    "chapterId": 6,
    "topicId": "6.4.6",
    "kind": "path",
    "title": "价值交付系统的反馈路径",
    "subtitle": "组织战略通过项目等组件转化为收益",
    "items": [
      {
        "label": "组织战略",
        "detail": "明确要解决的问题和价值目标。"
      },
      {
        "label": "组合与项目集",
        "detail": "选择并协调投资与相关项目。"
      },
      {
        "label": "项目与产品",
        "detail": "开展临时性建设并创造有用的成果。"
      },
      {
        "label": "运营",
        "detail": "持续运营并提供产品或服务。"
      },
      {
        "label": "价值反馈",
        "detail": "测量成果、反馈组织以调整战略与行动。"
      }
    ],
    "center": "",
    "insight": "价值不是“项目按时结束”这么简单，而是实现有效收益。",
    "sourcePage": 61
  },
  {
    "id": "c6-knowledge",
    "chapterId": 6,
    "topicId": "6.4.4",
    "kind": "compare",
    "title": "十大知识领域的管理主线",
    "subtitle": "用五组主题背十大领域",
    "items": [
      {
        "label": "统筹与范围",
        "detail": "整合管理、范围管理。"
      },
      {
        "label": "计划与成本",
        "detail": "进度管理、成本管理。"
      },
      {
        "label": "品质与人力",
        "detail": "质量管理、资源管理。"
      },
      {
        "label": "协作与不确定",
        "detail": "沟通管理、风险管理。"
      },
      {
        "label": "外部与关系",
        "detail": "采购管理、干系人管理。"
      }
    ],
    "center": "",
    "insight": "10 大领域横向组织知识；5 大过程组纵向组织管理过程。",
    "sourcePage": 59
  },
  {
    "id": "c7-project-init",
    "chapterId": 7,
    "topicId": "7.0",
    "kind": "path",
    "title": "从项目构想到投资决策",
    "subtitle": "立项管理前期阶段的完整主线",
    "items": [
      {
        "label": "项目建议",
        "detail": "提出建设目标与必要性"
      },
      {
        "label": "立项申请",
        "detail": "提交初始申请文件"
      },
      {
        "label": "可行性研究",
        "detail": "充分分析技术、经济与运行约束"
      },
      {
        "label": "项目评估",
        "detail": "独立检查可靠性和价值"
      },
      {
        "label": "审批决策",
        "detail": "决定是否进入实施准备"
      }
    ],
    "center": "",
    "insight": "先证明值得建，再研究能否建。",
    "sourcePage": 3
  },
  {
    "id": "c7-party",
    "chapterId": 7,
    "topicId": "7.0",
    "kind": "compare",
    "title": "甲方与乙方的立项路线",
    "subtitle": "同一个项目的两种管理视角",
    "items": [
      {
        "label": "甲方：发起建设",
        "detail": "需求调研→项目建议书→可研→评估→批准→招标"
      },
      {
        "label": "乙方：争取承建",
        "detail": "获取招标信息→识别机会→可研→论证评估→投标→签约"
      }
    ],
    "center": "",
    "insight": "甲方做投资决策；乙方做投标与履约能力决策。",
    "sourcePage": 3
  },
  {
    "id": "c7-proposal",
    "chapterId": 7,
    "topicId": "7.1",
    "kind": "wheel",
    "title": "项目建议书四项核心",
    "subtitle": "一必要、两预测、一条件",
    "items": [
      {
        "label": "建设必要性",
        "detail": "为什么需要建这个项目"
      },
      {
        "label": "项目市场预测",
        "detail": "项目所处行业和市场形势"
      },
      {
        "label": "成果市场预测",
        "detail": "未来产品或服务需求"
      },
      {
        "label": "建设必需条件",
        "detail": "资源、政策、能力等基础前提"
      }
    ],
    "center": "项目建议书",
    "insight": "四个要点与详细可研内容不要混淆。",
    "sourcePage": 5
  },
  {
    "id": "c7-five-feasibility",
    "chapterId": 7,
    "topicId": "7.2.1",
    "kind": "wheel",
    "title": "项目可行性五个维度",
    "subtitle": "一张图快速分清技术、经济、社会、运行和其他",
    "items": [
      {
        "label": "技术",
        "detail": "风险、人力、技术能力、物资可用"
      },
      {
        "label": "经济",
        "detail": "支出、收益、投资回报、敏感性"
      },
      {
        "label": "社会",
        "detail": "组织内部与社会外部效益"
      },
      {
        "label": "运行环境",
        "detail": "管理机制、人员、数据与软硬件环境"
      },
      {
        "label": "其他",
        "detail": "法律、政策、合同、知识产权"
      }
    ],
    "center": "项目可行性",
    "insight": "场景题先识别约束属于哪个维度。",
    "sourcePage": 7
  },
  {
    "id": "c7-technical",
    "chapterId": 7,
    "topicId": "7.2.1",
    "kind": "compare",
    "title": "技术可行性四因素",
    "subtitle": "判断“技术上做不做得到”",
    "items": [
      {
        "label": "开发风险",
        "detail": "能否实现预定目标及功能"
      },
      {
        "label": "人力资源",
        "detail": "有没有合适人员、能否补充"
      },
      {
        "label": "技术能力",
        "detail": "掌握的技术是否满足项目需要"
      },
      {
        "label": "物资可用",
        "detail": "设备、产品、工具是否能获取"
      }
    ],
    "center": "",
    "insight": "风险、人力、技术、物资。",
    "sourcePage": 8
  },
  {
    "id": "c7-social",
    "chapterId": 7,
    "topicId": "7.2.1",
    "kind": "compare",
    "title": "社会效益的内外两面",
    "subtitle": "收益不止于现金流",
    "items": [
      {
        "label": "组织内部",
        "detail": "品牌、创新、竞争力、管理提升、员工发展"
      },
      {
        "label": "社会外部",
        "detail": "公共、文化、环境、社会责任等效益"
      }
    ],
    "center": "",
    "insight": "组织内部“品技竞管人”；外部“公文环责”。",
    "sourcePage": 10
  },
  {
    "id": "c7-economic",
    "chapterId": 7,
    "topicId": "7.2.1",
    "kind": "cycle",
    "title": "经济可行性四类分析",
    "subtitle": "财务合理性和关键假设检验",
    "items": [
      {
        "label": "支出分析",
        "detail": "测算一次性与非一次性成本"
      },
      {
        "label": "收益分析",
        "detail": "估计直接和间接收益"
      },
      {
        "label": "投资回报",
        "detail": "投入产出比与回收期"
      },
      {
        "label": "敏感性分析",
        "detail": "关键参数变化对收益的影响"
      }
    ],
    "center": "经济评价",
    "insight": "题干出现“收益率、回收期、负载变化”先找经济可行性。",
    "sourcePage": 9
  },
  {
    "id": "c7-feasibility-depth",
    "chapterId": 7,
    "topicId": "7.2.2",
    "kind": "layers",
    "title": "机会 → 初步 → 详细可研",
    "subtitle": "研究深度逐级加深",
    "items": [
      {
        "label": "详细可研",
        "detail": "系统全面论证技术、经济、运营等，作为决策依据"
      },
      {
        "label": "初步可研",
        "detail": "客户/市场摸底，形成初步估计和判断"
      },
      {
        "label": "机会研究",
        "detail": "投资设想及机会识别，判断是否继续研究"
      }
    ],
    "center": "研究深度",
    "insight": "初步可研可按规模合并；详细可研不能省略。",
    "sourcePage": 11
  },
  {
    "id": "c7-prelim",
    "chapterId": 7,
    "topicId": "7.2.2",
    "kind": "path",
    "title": "初步可行性研究内容",
    "subtitle": "形成对规模、资源、进度、投资的整体判断",
    "items": [
      {
        "label": "需求与市场",
        "detail": "检验需求是否存在"
      },
      {
        "label": "设备与资源",
        "detail": "估计人员及设施投入"
      },
      {
        "label": "空间与项目设计",
        "detail": "初拟总体方案和布局"
      },
      {
        "label": "进度安排",
        "detail": "初排主要时间安排"
      },
      {
        "label": "投资成本",
        "detail": "估计项目投入"
      }
    ],
    "center": "",
    "insight": "初步可研是概要研判，不等于正式详细设计。",
    "sourcePage": 12
  },
  {
    "id": "c7-detail",
    "chapterId": 7,
    "topicId": "7.2.3",
    "kind": "compare",
    "title": "三类研究横向对照",
    "subtitle": "初步研究、详细研究与辅助功能研究",
    "items": [
      {
        "label": "初步研究",
        "detail": "需求市场、投入资源、空间布局、项目设计、进度、成本"
      },
      {
        "label": "详细研究",
        "detail": "市场预测、技术设备、布局、资金筹措、经济分析"
      },
      {
        "label": "辅助研究",
        "detail": "在部分关键领域深入实验和论证，不代替全部可研"
      }
    ],
    "center": "",
    "insight": "详细调查最系统；辅助研究只处理局部关键条件。",
    "sourcePage": 13
  },
  {
    "id": "c7-costs",
    "chapterId": 7,
    "topicId": "7.2.3",
    "kind": "layers",
    "title": "项目总成本与经营成本",
    "subtitle": "成本范围中的“包含/不包含”陷阱",
    "items": [
      {
        "label": "总成本",
        "detail": "研发 + 行政管理 + 销售与分销 + 财务费用和折旧"
      },
      {
        "label": "经营成本",
        "detail": "研发 + 行政管理 + 销售与分销"
      },
      {
        "label": "经常性支出",
        "detail": "人员薪酬、租金、水电等持续发生费用"
      }
    ],
    "center": "",
    "insight": "经营成本不含财务费用和折旧（按讲义口径）。",
    "sourcePage": 26
  },
  {
    "id": "c7-assessment",
    "chapterId": 7,
    "topicId": "7.3",
    "kind": "path",
    "title": "项目评估工作六步",
    "subtitle": "从独立评估到形成报告",
    "items": [
      {
        "label": "成立评估小组",
        "detail": "指定角色和分工"
      },
      {
        "label": "调查研究",
        "detail": "收集与核实证据"
      },
      {
        "label": "分析评估",
        "detail": "审查项目价值和条件"
      },
      {
        "label": "修订报告",
        "detail": "形成讨论稿并完善"
      },
      {
        "label": "专家论证",
        "detail": "引入独立意见"
      },
      {
        "label": "发布评估报告",
        "detail": "支持决策与审批"
      }
    ],
    "center": "",
    "insight": "评估不是项目经理自行“拍板”，要有独立论证。",
    "sourcePage": 23
  },
  {
    "id": "c7-assessment-inputs",
    "chapterId": 7,
    "topicId": "7.3",
    "kind": "compare",
    "title": "项目评估五项依据",
    "subtitle": "不包含后续生成的项目章程",
    "items": [
      {
        "label": "建议书与批复",
        "detail": "已提出并批准的项目建设构想"
      },
      {
        "label": "可研报告",
        "detail": "技术、经济及运营分析证据"
      },
      {
        "label": "申请与初审",
        "detail": "报送组织申请及主管部门意见"
      },
      {
        "label": "关键协议文件",
        "detail": "建设条件、工程相关协议"
      },
      {
        "label": "其他必要资料",
        "detail": "法规要求的辅助文件与证据"
      }
    ],
    "center": "",
    "insight": "题目若问评估依据，项目章程往往是干扰项。",
    "sourcePage": 23
  },
  {
    "id": "c8-purpose",
    "chapterId": 8,
    "topicId": "8.0",
    "kind": "wheel",
    "title": "整合管理五项目标",
    "subtitle": "项目经理跨知识领域的“总协调”",
    "items": [
      {
        "label": "协调资源",
        "detail": "统筹有限资源分配"
      },
      {
        "label": "平衡需求",
        "detail": "处理冲突的干系人和项目约束"
      },
      {
        "label": "备选方法",
        "detail": "分析和选择管理行动"
      },
      {
        "label": "裁剪过程",
        "detail": "选取符合情境的过程"
      },
      {
        "label": "管理依赖",
        "detail": "把各知识领域联系起来"
      }
    ],
    "center": "整合管理",
    "insight": "识别、定义、组合、统一、协调贯穿项目始终。",
    "sourcePage": 3
  },
  {
    "id": "c8-dimensions",
    "chapterId": 8,
    "topicId": "8.1.1",
    "kind": "triangle",
    "title": "三个层面的整合",
    "subtitle": "执行整合不仅是处理工作流程",
    "items": [
      {
        "label": "过程层面",
        "detail": "协调重叠与重复过程"
      },
      {
        "label": "认知层面",
        "detail": "运用经验、领导力、技术与商务能力"
      },
      {
        "label": "背景层面",
        "detail": "适应新技术、多文化和虚拟团队"
      }
    ],
    "center": "项目整合",
    "insight": "过程/认知/背景是第八章常考概念。",
    "sourcePage": 5
  },
  {
    "id": "c8-complexity",
    "chapterId": 8,
    "topicId": "8.1.2",
    "kind": "wheel",
    "title": "复杂性的四个条件",
    "subtitle": "整体不等于各部分简单相加",
    "items": [
      {
        "label": "多个部分",
        "detail": "包含多个子系统/工作单元"
      },
      {
        "label": "相互关联",
        "detail": "多个部分之间互相影响"
      },
      {
        "label": "动态交互",
        "detail": "作用关系随时间变化"
      },
      {
        "label": "涌现行为",
        "detail": "结果可能出现不可预期的新性质"
      }
    ],
    "center": "复杂性",
    "insight": "复杂性不仅是数量多，更是关联和交互。",
    "sourcePage": 4
  },
  {
    "id": "c8-new-practices",
    "chapterId": 8,
    "topicId": "8.1.3",
    "kind": "compare",
    "title": "整合管理五项新实践",
    "subtitle": "技术与人的管理并重",
    "items": [
      {
        "label": "信息化",
        "detail": "收集、分析和利用数据"
      },
      {
        "label": "可视化",
        "detail": "透明地呈现实时状态"
      },
      {
        "label": "知识管理",
        "detail": "减少人员流动造成的知识损失"
      },
      {
        "label": "经理职责扩展",
        "detail": "更早介入商业论证和效益"
      },
      {
        "label": "混合方法",
        "detail": "融合预测、迭代与敏捷"
      }
    ],
    "center": "",
    "insight": "新工具服务于项目管理，不代替经理整合责任。",
    "sourcePage": 4
  },
  {
    "id": "c8-plan-vs-docs",
    "chapterId": 8,
    "topicId": "8.1.4",
    "kind": "compare",
    "title": "项目管理计划 VS 项目文件",
    "subtitle": "别把计划当成所有项目文件的集合",
    "items": [
      {
        "label": "项目管理计划",
        "detail": "子计划、基准、生命周期及管理审查等综合指导性内容"
      },
      {
        "label": "项目文件",
        "detail": "假设日志、问题日志、风险登记册、需求文件、经验教训等工作记录"
      }
    ],
    "center": "",
    "insight": "计划指导怎么管理；文件记录具体工作与状态。",
    "sourcePage": 6
  },
  {
    "id": "c8-seven-processes",
    "chapterId": 8,
    "topicId": "8.2.1",
    "kind": "path",
    "title": "整合管理七大过程",
    "subtitle": "按启动→规划→执行→监控→收尾梳理",
    "items": [
      {
        "label": "制定章程",
        "detail": "正式授权，输出章程"
      },
      {
        "label": "制订计划",
        "detail": "整合计划与基准"
      },
      {
        "label": "指导工作",
        "detail": "执行计划与批准的变更"
      },
      {
        "label": "管理知识",
        "detail": "记录经验与知识"
      },
      {
        "label": "监控工作",
        "detail": "分析绩效并建议改进"
      },
      {
        "label": "变更控制",
        "detail": "审批变更并保护基准"
      },
      {
        "label": "结束项目",
        "detail": "正式收尾与移交"
      }
    ],
    "center": "",
    "insight": "七过程对应五大过程组，并非七个独立项目阶段。",
    "sourcePage": 9
  },
  {
    "id": "c8-process-outputs",
    "chapterId": 8,
    "topicId": "8.2.1",
    "kind": "compare",
    "title": "七个过程的高频输出",
    "subtitle": "选择题考“某输出来自哪个过程”",
    "items": [
      {
        "label": "章程",
        "detail": "项目章程、假设日志"
      },
      {
        "label": "项目计划",
        "detail": "综合项目管理计划"
      },
      {
        "label": "指导工作",
        "detail": "可交付成果、原始绩效数据、问题日志"
      },
      {
        "label": "管理知识",
        "detail": "经验教训登记册"
      },
      {
        "label": "监控工作",
        "detail": "工作绩效报告、变更请求"
      },
      {
        "label": "整体变更",
        "detail": "批准的变更请求、变更日志"
      },
      {
        "label": "收尾",
        "detail": "最终产品、最终报告"
      }
    ],
    "center": "",
    "insight": "先记“独特输出”，再拓展 ITTO。",
    "sourcePage": 16
  },
  {
    "id": "c8-tailor",
    "chapterId": 8,
    "topicId": "8.2.2",
    "kind": "wheel",
    "title": "整合管理八项裁剪因素",
    "subtitle": "记忆口诀：两周期、两管理、变治教效",
    "items": [
      {
        "label": "项目生命周期",
        "detail": "规划阶段和管理节奏"
      },
      {
        "label": "开发生命周期",
        "detail": "预测/迭代/适应方式"
      },
      {
        "label": "管理方法",
        "detail": "根据情景选方法"
      },
      {
        "label": "知识管理",
        "detail": "知识获取与传承"
      },
      {
        "label": "变更",
        "detail": "调整变更处理方式"
      },
      {
        "label": "治理",
        "detail": "组织管理和审批要求"
      },
      {
        "label": "经验教训",
        "detail": "既有知识和反馈"
      },
      {
        "label": "效益",
        "detail": "业务价值兑现"
      }
    ],
    "center": "量体裁衣",
    "insight": "裁剪意味着恰当选择，不是删除所有控制。",
    "sourcePage": 11
  },
  {
    "id": "c8-agile",
    "chapterId": 8,
    "topicId": "8.2.3",
    "kind": "cycle",
    "title": "适应型团队的快速反馈",
    "subtitle": "自组织交付，经理仍对整合负责",
    "items": [
      {
        "label": "确定价值",
        "detail": "从核心需求出发"
      },
      {
        "label": "迭代交付",
        "detail": "交付最小可用成果"
      },
      {
        "label": "收集反馈",
        "detail": "用户及时验证"
      },
      {
        "label": "协同改进",
        "detail": "团队再规划并优化"
      }
    ],
    "center": "反馈循环",
    "insight": "敏捷把更多产品决策权授予团队，但不移走整合责任。",
    "sourcePage": 12
  },
  {
    "id": "c8-charter-itto",
    "chapterId": 8,
    "topicId": "8.3",
    "kind": "path",
    "title": "制定项目章程 ITTO",
    "subtitle": "输入 → 工具与技术 → 输出",
    "items": [
      {
        "label": "立项/协议",
        "detail": "立项管理文件、协议、环境与过程资产"
      },
      {
        "label": "专家与数据收集",
        "detail": "专家判断、头脑风暴、焦点小组和访谈"
      },
      {
        "label": "协商与会议",
        "detail": "冲突管理、引导、会议管理"
      },
      {
        "label": "项目章程",
        "detail": "正式批准并授权项目经理"
      },
      {
        "label": "假设日志",
        "detail": "记录假设条件和制约因素"
      }
    ],
    "center": "",
    "insight": "章程是授权文件，不能替代对外合同。",
    "sourcePage": 20
  },
  {
    "id": "c8-charter-contents",
    "chapterId": 8,
    "topicId": "8.3",
    "kind": "wheel",
    "title": "项目章程主要内容",
    "subtitle": "高层级信息，用于正式授权项目",
    "items": [
      {
        "label": "目的与目标",
        "detail": "项目目的、可测量目标及成功标准"
      },
      {
        "label": "需求与范围",
        "detail": "高层级需求、边界、可交付成果"
      },
      {
        "label": "风险与里程碑",
        "detail": "整体项目风险、总体进度里程碑"
      },
      {
        "label": "财务与干系人",
        "detail": "已批资金、关键干系人"
      },
      {
        "label": "审批与退出",
        "detail": "审批要求和项目退出标准"
      },
      {
        "label": "授权与职权",
        "detail": "项目经理和发起人姓名及权责"
      }
    ],
    "center": "项目章程",
    "insight": "批准章程标志项目正式启动。",
    "sourcePage": 24
  },
  {
    "id": "c8-plan-components",
    "chapterId": 8,
    "topicId": "8.4",
    "kind": "layers",
    "title": "项目管理计划三个组成部分",
    "subtitle": "12个子管理计划 + 4个基准 + 其他组件",
    "items": [
      {
        "label": "其他组件",
        "detail": "生命周期、开发方法、管理审查"
      },
      {
        "label": "四项基准",
        "detail": "范围、进度、成本与绩效测量基准"
      },
      {
        "label": "十二个计划",
        "detail": "各知识领域子计划及需求、变更、配置计划"
      }
    ],
    "center": "计划综合体",
    "insight": "受控基准确立以后修改需要履行正式变更控制。",
    "sourcePage": 32
  },
  {
    "id": "c8-baseline",
    "chapterId": 8,
    "topicId": "8.4",
    "kind": "compare",
    "title": "基准前后修改规则",
    "subtitle": "同样是修改计划，授权和流程不同",
    "items": [
      {
        "label": "基准确立前",
        "detail": "计划可多次更新，通常无须正式审批流程"
      },
      {
        "label": "基准确立后",
        "detail": "需提出变更请求，获得授权批准后调整基准"
      }
    ],
    "center": "",
    "insight": "基准只能对未来调整，不能改写已经发生的绩效。",
    "sourcePage": 28
  },
  {
    "id": "c8-work-output",
    "chapterId": 8,
    "topicId": "8.5",
    "kind": "compare",
    "title": "指导与管理项目工作的关键产出",
    "subtitle": "执行过程的四类高频输出",
    "items": [
      {
        "label": "可交付成果",
        "detail": "可核实的产品、成果或服务能力"
      },
      {
        "label": "绩效数据",
        "detail": "工作中的原始观察、测量值和KPI"
      },
      {
        "label": "问题日志",
        "detail": "问题分类、责任人、优先级、期限、状态"
      },
      {
        "label": "变更请求",
        "detail": "纠正、预防、缺陷补救、更新"
      }
    ],
    "center": "",
    "insight": "已批准的变更在“指导与管理工作”中实施。",
    "sourcePage": 36
  },
  {
    "id": "c8-change-types",
    "chapterId": 8,
    "topicId": "8.5",
    "kind": "compare",
    "title": "四种变更请求分类",
    "subtitle": "考题常根据情境判断措施类型",
    "items": [
      {
        "label": "纠正措施",
        "detail": "现在已出现偏差 → 拉回计划"
      },
      {
        "label": "预防措施",
        "detail": "未来可能出现偏差 → 先预防"
      },
      {
        "label": "缺陷补救",
        "detail": "交付物有缺陷 → 修正产品"
      },
      {
        "label": "更新",
        "detail": "正式受控的计划或文件变更"
      }
    ],
    "center": "",
    "insight": "纠正针对当下偏差；预防针对未来风险。",
    "sourcePage": 43
  },
  {
    "id": "c8-knowledge",
    "chapterId": 8,
    "topicId": "8.6",
    "kind": "compare",
    "title": "显性知识与隐性知识",
    "subtitle": "用文档和互动的不同方式共享",
    "items": [
      {
        "label": "显性知识",
        "detail": "知识库、登记册、模板、图文资料可直接整理的知识"
      },
      {
        "label": "隐性知识",
        "detail": "经验诀窍、判断力；人际互动和指导更有效"
      }
    ],
    "center": "",
    "insight": "知识管理首先营造信任；经验教训从项目早期开始记。",
    "sourcePage": 47
  },
  {
    "id": "c8-lessons",
    "chapterId": 8,
    "topicId": "8.6",
    "kind": "cycle",
    "title": "经验教训的持续闭环",
    "subtitle": "不要到项目结束才想起复盘",
    "items": [
      {
        "label": "尽早创建",
        "detail": "项目早期建立登记册"
      },
      {
        "label": "日常记录",
        "detail": "记录问题、挑战、影响、行动"
      },
      {
        "label": "团队分享",
        "detail": "交流并验证可复用的经验"
      },
      {
        "label": "归档复用",
        "detail": "收尾进入组织经验教训知识库"
      }
    ],
    "center": "持续积累",
    "insight": "持续记录、共享、更新，比一次性收尾总结更有效。",
    "sourcePage": 49
  },
  {
    "id": "c8-performance-chain",
    "chapterId": 8,
    "topicId": "8.7",
    "kind": "path",
    "title": "绩效数据→信息→报告",
    "subtitle": "原始事实变成管理决策",
    "items": [
      {
        "label": "原始数据",
        "detail": "实际成本、进度日期、缺陷数量"
      },
      {
        "label": "分析信息",
        "detail": "与基准对比、识别偏差及原因"
      },
      {
        "label": "形成报告",
        "detail": "状态、趋势、预测和建议"
      },
      {
        "label": "决策沟通",
        "detail": "向干系人报告并实施必要行动"
      }
    ],
    "center": "",
    "insight": "数据是什么；信息为什么；报告怎么办。",
    "sourcePage": 41
  },
  {
    "id": "c8-analysis-tools",
    "chapterId": 8,
    "topicId": "8.7",
    "kind": "compare",
    "title": "监控项目工作的六种分析工具",
    "subtitle": "根据题目关键词判断工具",
    "items": [
      {
        "label": "备选方案",
        "detail": "比较多种纠正方案"
      },
      {
        "label": "成本效益",
        "detail": "找出最节约成本的措施"
      },
      {
        "label": "挣值分析",
        "detail": "综合范围、进度与成本"
      },
      {
        "label": "根本原因",
        "detail": "查找偏差的根因"
      },
      {
        "label": "趋势分析",
        "detail": "从历史规律预测未来"
      },
      {
        "label": "偏差分析",
        "detail": "比较计划目标与实际差异"
      }
    ],
    "center": "",
    "insight": "备选选方案，成本效益看值不值，挣值看综合绩效。",
    "sourcePage": 56
  },
  {
    "id": "c8-change-flow",
    "chapterId": 8,
    "topicId": "8.8",
    "kind": "path",
    "title": "整体变更控制八步流程",
    "subtitle": "变更从提出到正式关闭",
    "items": [
      {
        "label": "变更申请",
        "detail": "正式提出请求"
      },
      {
        "label": "初步审查",
        "detail": "核对变更合法性、完整性"
      },
      {
        "label": "方案论证",
        "detail": "分析对范围进度成本风险的影响"
      },
      {
        "label": "正式审查",
        "detail": "PM/CCB等授权人批准或否决"
      },
      {
        "label": "通知实施",
        "detail": "通知有关干系人并执行"
      },
      {
        "label": "实施监控",
        "detail": "跟踪是否按批准方案完成"
      },
      {
        "label": "效果评估",
        "detail": "检查改动达成效果"
      },
      {
        "label": "变更收尾",
        "detail": "更新日志、关闭请求"
      }
    ],
    "center": "",
    "insight": "控制过程审批后，执行团队才实施变更。",
    "sourcePage": 65
  },
  {
    "id": "c8-change-authorities",
    "chapterId": 8,
    "topicId": "8.8",
    "kind": "compare",
    "title": "变更审批角色分工",
    "subtitle": "识别谁有权决定",
    "items": [
      {
        "label": "项目经理",
        "detail": "一般批准权限范围内的不影响基准的变更"
      },
      {
        "label": "发起人",
        "detail": "通常审批项目章程的修改"
      },
      {
        "label": "CCB",
        "detail": "对影响基准和流程指定事项作出决策"
      },
      {
        "label": "客户",
        "detail": "按合同约定批准需要客户确认的变更"
      }
    ],
    "center": "",
    "insight": "CCB只做决策不执行；所有变更必须记录并追踪。",
    "sourcePage": 65
  },
  {
    "id": "c8-configuration",
    "chapterId": 8,
    "topicId": "8.8",
    "kind": "compare",
    "title": "配置控制 VS 变更控制",
    "subtitle": "关注的对象不同但互相配合",
    "items": [
      {
        "label": "配置控制",
        "detail": "识别配置项、记录状态、核实与审计技术规范"
      },
      {
        "label": "变更控制",
        "detail": "识别变更、记录、作出批准/否决决定、跟踪变更"
      }
    ],
    "center": "",
    "insight": "配置管理重技术状态；变更管理重审批决策。",
    "sourcePage": 64
  },
  {
    "id": "c8-closure",
    "chapterId": 8,
    "topicId": "8.9",
    "kind": "path",
    "title": "项目收尾六项必要活动",
    "subtitle": "完成 ≠ 正式收尾",
    "items": [
      {
        "label": "检查退出标准",
        "detail": "核实全部必要条件"
      },
      {
        "label": "关闭合同",
        "detail": "清理与供应商的承诺"
      },
      {
        "label": "归档总结",
        "detail": "记录与总结经验教训"
      },
      {
        "label": "成果移交",
        "detail": "客户/运营接收成果"
      },
      {
        "label": "提出改进",
        "detail": "改进组织政策与流程"
      },
      {
        "label": "满意度评估",
        "detail": "调查干系人评价"
      }
    ],
    "center": "",
    "insight": "即便提前终止，也需要记录原因并完成收尾。",
    "sourcePage": 71
  },
  {
    "id": "c8-closing-report",
    "chapterId": 8,
    "topicId": "8.9",
    "kind": "compare",
    "title": "项目最终报告八类内容",
    "subtitle": "核心四约束与业务价值一起回顾",
    "items": [
      {
        "label": "项目和范围",
        "detail": "项目概述、范围达成证据"
      },
      {
        "label": "质量",
        "detail": "质量标准、核实和里程碑偏差"
      },
      {
        "label": "成本与进度",
        "detail": "实际与计划差异及原因"
      },
      {
        "label": "成果",
        "detail": "最终产品、服务和移交确认"
      },
      {
        "label": "业务需求",
        "detail": "是否满足需求和预期效益"
      },
      {
        "label": "风险问题",
        "detail": "实施中主要问题及处理情况"
      }
    ],
    "center": "",
    "insight": "最终报告是综合绩效复盘，不只是“项目完成”一句话。",
    "sourcePage": 73
  }
];