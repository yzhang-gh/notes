# ？

!> 🚧...

- first-order logic?
- a single rule of inference, called resolution?
- clausal form? a restricted clausal form called Horn clause logic
- Gödel's incompleteness theorems? 要么自相矛盾，要么不完备
- 证明论？模型论？类型论（似乎不再是数理逻辑了）？

## 数理逻辑

- accent**well-formed formula** (abbr. **wff**), a finite sequence of symbols from a given alphabet that is part of a formal language (well-formed 又有什么要求🤔)
- accent**atomic formula** (aka **atom**)，不含逻辑连接词的，或者说不含 sub-formulas 的 wff
- accent**文字**，accent**literal**，an **atom** or its negation
- accent**子句**，accent**clause**，an expression formed from a finite collection of **literal**s
    - accent**Horn clause**，是文字 (literal) 的析取 (disjunction)，并且最多只有一个肯定文字
        - A Horn clause with exactly one positive literal is a **definite clause**
        - A Horn clause without a positive literal is called a **goal clause**
        - 注意 Horn clauses 的合取是合取范式
- accent**句子**，accent**sentence**，没有自由变量的公式🤔
- accent**theory**，一组句子🤔
- A set of Horn clauses is called a **logic program** [1]

<!--  -->

- Boolean logic
- accent**合取范式**，accent**conjunctive normal form** (**CNF**) or accent**clausal normal form**，是若干个子句 (clause) 的合取 (conjunction)，其中子句为文字 (literal) 的析取，也即 **AND of ORs**
    - 所有文字的合取当然是 CNF 的，每个文字都看作一个子句
    - 所有文字的析取也是 CNF 的（注意：同时也是 DNF 的），看作只有一个子句（🤔这种情况很反直觉，至于为什么会定义这种标准形式，说是在自动定理证明中有用）
- accent**析取范式**，accent**disjunctive normal form** (**DNF**)，即 **OR of ANDs**

<!--  -->

- **演绎**，**deduction**，从一般到特殊，从一般性规律出发来探讨具体事物
- **归纳**，**induction**，从特殊到一般，从个别事物出发概括出一般性规律
- accent**归结**，accent**resolution**，

## 规则学习

### 命题规则学习

- 序贯覆盖
- 剪枝优化

### 一阶规则学习

FOIL (First-Order Inductive Learner)

序贯覆盖，自顶向下（从一般到特殊）

本质只是把命题规则学习的过程稍加改变使其能应用在一阶规则上

### 归纳逻辑程序设计

ILP (Inductive Logic Programming)

自底向上

#### 最小一般泛化

LGG (Least General Generalization)，从名字就能看出来，给定若干规则，希望总结成一条相对泛化的规则，但同时又不要太过泛化（最小泛化），可以用最大公约数来类比

- 对于两条规则（🤔应该需要写成合取的形式）
    - 先找都有的谓词，然后对其中相同位置的常量进行考察，若相同则保留，若不相同则替换为变量（泛化）
    - 对于不是都含有的谓词，直接忽略，否则 LGG 就不能特化成该规则

🤔RLGG

### 递归结

inverse resolution，四种方式，在一阶规则里要用到 置换 和 合一 两种操作

## 参考文献 {docsify-ignore}

1. Stephen Muggleton. Inductive Logic Programming. *New Generation Computing*. 1991. ([PDF](https://www.doc.ic.ac.uk/~shm/Papers/ilp.pdf))
   最有用的是附录 A，正文不是很懂，只看到有很多种 operations
2. 周志华. 机器学习. 第 15 章，规则学习
