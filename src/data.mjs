// All portfolio content. Row = [date, title, role, company, url, note]
// company: 'k' = Conduktor, 'c' = CelerData
const K = 'https://www.conduktor.io';
const YT = (id) => `https://www.youtube.com/watch?v=${id}`;
const CH = 'https://www.youtube.com/@getconduktor/videos';
const DEMO = (s) => `${K}/product-demos/${s}`;
const BLOG = (s) => `${K}/blog/${s}`;
const PH = 'https://phoenixdata.ai/case-studies';

export const person = {
  name: 'Ron Kapoor',
  email: 'ronkapoor2017@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ron-kapoor',
  github: 'https://github.com/ronkapoor86',
};

export const topics = [
  {
    id: 'positioning-and-messaging',
    blurb: 'How the product is described: site pages, comparisons, overviews and solution briefs.',
    partitions: [
      { name: 'site-pages', rows: [
        ['2026', 'Home page', 'wrote, built', 'k', `${K}/`, 'Repositioned around The Kafka Operations Platform; launch-day heroes.'],
        ['2026', 'Console product page', 'wrote, built', 'k', `${K}/console`],
        ['2026', 'Gateway product page', 'wrote', 'k', `${K}/gateway`],
        ['2026', 'Pricing page', 'wrote, built', 'k', `${K}/pricing`],
        ['2026-06', 'Gateway Community Edition page', 'wrote, built', 'k', `${K}/gateway/community-edition`],
        ['2026-06', 'Schema Registry Proxy page', 'wrote, built', 'k', `${K}/schema-registry-proxy`],
        ['2026-04', 'Kafka Security', 'wrote, built', 'k', `${K}/kafka-security`],
        ['2026-04', 'Kafka UI', 'wrote, built', 'k', `${K}/kafka-ui`],
        ['2026-02', 'Federated Ownership', 'wrote, built', 'k', `${K}/federated-ownership`],
        ['2026-02', 'Operational Efficiency use case', 'wrote, built', 'k', `${K}/solutions/use-case/operational-efficiency`],
        ['2026-02', 'Community page', 'wrote, built', 'k', `${K}/community`],
        ['2026', 'Get Started', 'wrote', 'k', `${K}/get-started`],
        ['2026', 'MCP page', 'wrote', 'k', `${K}/mcp`],
        ['2026', 'Monthly product release notes', 'wrote', 'k', `${K}/product-releases`, 'January, February, June, August and October.'],
        ['2026-03', 'QCon London 2026 event page', 'wrote, built', 'k', `${K}/events/conferences/qcon-london-2026`],
      ]},
      { name: 'comparison-pages', rows: [
        ['2026-09', 'Conduktor vs build your own', 'wrote, built', 'k', `${K}/compare/conduktor-vs-build-your-own`],
        ['2026-09', 'Conduktor vs Lenses', 'wrote, built', 'k', `${K}/compare/conduktor-vs-lenses`],
        ['2026-09', 'Conduktor vs AKHQ', 'wrote, built', 'k', `${K}/compare/conduktor-vs-akhq`],
        ['2026-09', 'Conduktor vs Kafbat UI', 'wrote, built', 'k', `${K}/compare/conduktor-vs-kafbat-ui`],
        ['2026-09', 'Conduktor vs Redpanda Console', 'wrote, built', 'k', `${K}/compare/conduktor-vs-redpanda-console`],
        ['2026-09', 'Conduktor vs Confluent Control Center', 'wrote, built', 'k', `${K}/compare/conduktor-vs-confluent-control-center`],
        ['2026-09', 'Gateway vs Confluent Gateway', 'wrote, built', 'k', `${K}/compare/conduktor-gateway-vs-confluent-gateway`],
        ['2026-09', 'Gateway vs Gravitee Kafka Gateway', 'wrote, built', 'k', `${K}/compare/conduktor-gateway-vs-gravitee-kafka-gateway`],
        ['2026-09', 'Gateway vs Kong Event Gateway', 'wrote, built', 'k', `${K}/compare/conduktor-gateway-vs-kong-event-gateway`],
        ['2026-09', 'Gateway vs Kroxylicious', 'wrote, built', 'k', `${K}/compare/conduktor-gateway-vs-kroxylicious`],
      ]},
      { name: 'overviews', rows: [
        ['2026', 'Conduktor Console Overview', 'wrote', 'k', 'files/conduktor-console-overview.pdf', 'PDF'],
        ['2026', 'Conduktor Gateway Overview', 'wrote', 'k', 'files/conduktor-gateway-overview.pdf', 'PDF'],
        ['2026-03', 'Conduktor Company Overview', 'wrote', 'k', 'files/conduktor-company-overview.pdf', 'PDF'],
      ]},
      { name: 'solution-briefs', rows: [
        ['2026', 'Federated Ownership', 'wrote', 'k', 'files/sb-federated-ownership.pdf', 'PDF'],
        ['2026', 'Operational Efficiency', 'wrote', 'k', 'files/cdk-operational-efficiency-solutionbrief.pdf', 'PDF'],
        ['2026', 'Data Security', 'wrote', 'k', 'files/sb-data-security.pdf', 'PDF'],
        ['2026', 'Disaster Recovery and Failover', 'wrote', 'k', 'files/cdk-disaster-recovery-failover.pdf', 'PDF'],
        ['2026', 'Migration and Infrastructure Efficiency', 'wrote', 'k', 'files/cdk-migration-infrastructure-efficiency-solutionbrief.pdf', 'PDF'],
        ['2026-03', 'AWS MSK: Govern, Secure and Scale Kafka', 'wrote', 'k', `${K}/assets/Conduktor-AWS-MSK-Solution-Brief.pdf`, 'PDF'],
      ]},
    ],
  },
  {
    id: 'product-launches',
    blurb: 'Products I took to market. Each row says what I made for the launch; the pieces themselves are in the other topics.',
    partitions: [
      { name: 'launches', rows: [
        ['2026-11', 'Conduktor Agents', 'wrote, built, produced', 'k', `${K}/console/agents`, 'Product page, launch film and two demo videos.'],
        ['2026-09', 'Flink SQL in Console', 'wrote', 'k', BLOG('flink-sql-kafka-permissions'), 'Launch post.'],
        ['2026-08', 'Stream Lineage', 'wrote, produced', 'k', BLOG('stream-lineage-is-useless-so-why-did-we-build-it'), 'Two demo videos and the launch post.'],
        ['2026-06', 'Gateway Community Edition', 'wrote, built, produced', 'k', `${K}/gateway/community-edition`, 'Product page, video ad, YouTube short and a one-command public quickstart.'],
        ['2026-06', 'Schema Registry Proxy', 'wrote, built', 'k', `${K}/schema-registry-proxy`, 'Product page and the post "Kafka Schema Registry: Open by Default".'],
        ['2026-05', 'Console Team Edition', 'wrote, built', 'k', `${K}/pricing`, 'Waitlist page, pricing redesign and self-serve checkout.'],
      ]},
    ],
  },
  {
    id: 'customer-stories',
    blurb: 'Production architectures turned into stories for technical and commercial readers.',
    partitions: [
      { name: 'stories', rows: [
        ['2026', 'German automaker unifies Kafka as an event-driven backbone', 'wrote', 'k', `${K}/customer-stories/german-automaker-unifies-kafka-event-driven-backbone`],
        ['2026', 'CDC Informatique: governed Kafka self-service', 'wrote', 'k', `${K}/customer-stories/cdc-informatique-governed-kafka-self-service`],
        ['2026', 'Investment fund: Kafka rightsizing for AI', 'wrote', 'k', `${K}/customer-stories/investment-fund-kafka-rightsizing-for-ai`],
        ['2025', 'Coinbase', 'wrote', 'c', `${PH}/case-study-coinbase.html`],
        ['2025', 'Demandbase', 'wrote', 'c', `${PH}/case-study-demandbase.html`],
        ['2025', 'Celonis', 'wrote', 'c', `${PH}/case-study-celonis.html`],
      ]},
    ],
  },
  {
    id: 'technical-writing',
    blurb: 'Long-form guides and 36 bylined posts on running Kafka.',
    partitions: [
      { name: 'guides-and-whitepapers', rows: [
        ['2026-05', 'Where Kafka Costs Hide: A Field Guide', 'wrote', 'k', `${K}/resources/ebooks/where-kafka-costs-hide-a-field-guide`, 'Whitepaper'],
        ['2026-03', 'The Kafka Debugging Playbook: Six Phases from Alert to Root Cause', 'wrote', 'k', `${K}/resources/ebooks/the-kafka-debugging-playbook`, 'Whitepaper'],
        ['2026-03', 'Kafka Disaster Recovery Beyond Replication', 'wrote', 'k', `${K}/resources/ebooks/kafka-disaster-recovery-beyond-replication`, 'Whitepaper'],
        ['2026-02', 'Kafka Disaster Recovery Readiness Checklist', 'wrote', 'k', `${K}/resources/ebooks/kafka-disaster-recovery-readiness-checklist`, 'Checklist'],
        ['2026-09', 'Financial services infographic', 'wrote', 'k', `${K}/assets/pdfs/financial-services-infographic.pdf`, 'PDF'],
      ]},
      { name: 'blog-posts', rows: [
        ['2026-11-09', 'What We Heard at Current San Francisco 2026', 'wrote', 'k', BLOG('what-we-heard-at-current-san-francisco-2026')],
        ['2026-11-02', 'AKHQ vs Paid Kafka Management Tools: When to Upgrade', 'wrote', 'k', BLOG('akhq-vs-paid-kafka-tools')],
        ['2026-10-30', 'Kafka Teams Spend Too Much Time on Routine Work', 'wrote', 'k', BLOG('kafka-teams-spend-too-much-time-on-routine-work')],
        ['2026-10-26', "A Lag Graph Can't Debug a Kafka Consumer", 'wrote', 'k', BLOG('kafka-consumer-debugging-tools')],
        ['2026-10-22', 'Kafka Data Sharing Is a Boundary Decision', 'wrote', 'k', BLOG('kafka-data-sharing-options')],
        ['2026-10-21', 'Most Kafka Data Governance Tools Never Read a Record', 'wrote', 'k', BLOG('kafka-data-governance-platforms')],
        ['2026-10-19', 'How Do I Reduce Our Kafka Costs?', 'wrote', 'k', BLOG('how-to-reduce-kafka-costs')],
        ['2026-10-19', 'I Want to Use MCP with Kafka. Which MCP Servers Exist?', 'wrote', 'k', BLOG('which-mcp-servers-exist-for-kafka')],
        ['2026-10-14', 'Should I Pick Conduktor or Kpow to Manage Our Kafka Clusters?', 'wrote', 'k', BLOG('conduktor-or-kpow-to-manage-kafka-clusters')],
        ['2026-10-14', 'How Do You Handle PII in Kafka?', 'wrote', 'k', BLOG('how-to-handle-pii-in-kafka')],
        ['2026-10-08', 'Who Should Get Kafka Consumer Lag Alerts?', 'wrote', 'k', BLOG('kafka-consumer-lag-alert-routing')],
        ['2026-10-02', 'Kafka Connect Management UI: What Are My Options?', 'wrote', 'k', BLOG('kafka-connect-management-ui-options')],
        ['2026-10-01', "What's the Best Kafka Monitoring Tool?", 'wrote', 'k', BLOG('best-kafka-monitoring-tool')],
        ['2026-09-30', 'How to Manage Kafka Topics and Schemas Easily', 'wrote', 'k', BLOG('how-to-manage-kafka-topics-and-schemas')],
        ['2026-09-29', 'How to Manage Kafka ACLs and Security at Scale', 'wrote', 'k', BLOG('how-to-manage-kafka-acls-at-scale')],
        ['2026-09-25', 'Apache Kafka for Enterprise: What Tools Do I Need?', 'wrote', 'k', BLOG('apache-kafka-for-enterprise-tools')],
        ['2026-09-22', 'Kafka AI Agents Should Behave Like Kubernetes Controllers', 'wrote', 'k', BLOG('kafka-ai-agents-kubernetes-controllers')],
        ['2026-09-18', 'Kafka Failover Automates the Wrong Half', 'wrote', 'k', BLOG('kafka-failover-automates-the-wrong-half')],
        ['2026-09-17', 'Kafka Is the Last Infrastructure Without a Hypervisor', 'wrote', 'k', BLOG('kafka-is-the-last-infrastructure-without-a-hypervisor')],
        ['2026-09-15', 'Kafka Has Rate Limits. Nobody Turns Them On.', 'wrote', 'k', BLOG('kafka-has-rate-limits-nobody-turns-them-on')],
        ['2026-09-11', 'How to Find the Producers and Consumers of a Kafka Topic', 'wrote', 'k', BLOG('who-produces-and-consumes-a-kafka-topic')],
        ['2026-09-10', 'Flink SQL Is Now in Conduktor Console', 'wrote', 'k', BLOG('flink-sql-kafka-permissions')],
        ['2026-09-09', 'Stream Lineage Is Useless. So Why Did We Build It?', 'wrote', 'k', BLOG('stream-lineage-is-useless-so-why-did-we-build-it')],
        ['2026-08-05', 'How to Approach Multi-Tenancy in Kafka', 'wrote', 'k', BLOG('how-to-do-multi-tenancy-in-kafka')],
        ['2026-07-30', 'Best Tools for Monitoring Kafka Consumer Lag (2026)', 'wrote', 'k', BLOG('best-kafka-consumer-lag-monitoring-tools')],
        ['2026-07-23', 'Kafka Migration Tools: What Each One Actually Moves', 'wrote', 'k', BLOG('kafka-migration-tools')],
        ['2026-07-10', 'Kafka Schema Registry: Open by Default', 'wrote', 'k', BLOG('kafka-schema-registry-open-by-default')],
        ['2026-06-23', 'Kafka Guardrails Gate. Templates Guide.', 'wrote', 'k', BLOG('kafka-guardrails-gate-templates-guide')],
        ['2026-06-18', 'Why Copy a Kafka Topic Just to Filter It?', 'wrote', 'k', BLOG('why-copy-a-kafka-topic-just-to-filter-it')],
        ['2026-05-27', 'What We Learned at Current 2026', 'wrote', 'k', BLOG('what-we-learned-at-current-2026')],
        ['2026-05-11', 'The Apache Kafka Security Playbook: Beyond TLS and ACLs', 'wrote', 'k', BLOG('apache-kafka-security-playbook')],
        ['2026-03-20', 'Set Up a Kafka Platform with an AI Agent', 'wrote', 'k', BLOG('set-up-a-kafka-platform-with-an-ai-agent')],
        ['2026-02-17', 'Ground Control to On-Call: Kafka Debugging Has Landed', 'wrote', 'k', BLOG('what-debugging-kafka-should-actually-look-like')],
        ['2026-02-06', 'Houston, We Have 7 CLI Tools and Zero Answers', 'wrote', 'k', BLOG('houston-we-have-7-cli-tools-and-zero-answers')],
        ['2026-02-04', 'Why Every Kafka Incident Ends with "Restart It"', 'wrote', 'k', BLOG('why-every-kafka-incident-ends-with-restart-it')],
        ['2025-12-10', 'IBM Acquires Confluent for $11B: What It Means for Kafka Teams', 'wrote', 'k', BLOG('ibm-confluent-11-billion-says-streaming-isn-t-optional')],
      ]},
    ],
  },
  {
    id: 'video-and-demos',
    blurb: '28 product films, demos and explainers that I wrote, recorded and edited.',
    partitions: [
      { name: 'product-films', rows: [
        ['', 'Conduktor Agents Launch Demo: AI That Fixes Kafka', 'produced', 'k', YT('cdWyFIJGT18')],
        ['', 'Conduktor Gateway: Community Edition', 'produced', 'k', YT('i6yrB1SpVAI')],
        ['', 'What is StarRocks', 'produced', 'c', YT('-yVk7t942is'), 'Launch video.'],
        ['', 'Conduktor Console: Full Product Walkthrough', 'produced', 'k', YT('Q8tWAkrj4KQ')],
        ['', 'Why We Built Conduktor Console', 'produced', 'k', YT('j3uuo56H4hs')],
        ['', 'How Swiss Post Scaled Kafka with Conduktor', 'produced', 'k', DEMO('how-swiss-post-scaled-kafka-with-conduktor')],
      ]},
      { name: 'demos', rows: [
        ['', 'Set Up a Kafka Agent in 4 Steps with Conduktor Console', 'produced', 'k', YT('OFvaghOq9dE')],
        ['', 'Agents for Platform Engineers: Cost and ACLs', 'produced', 'k', DEMO('conduktor-agents-for-platform-engineers')],
        ['', 'Kafka Lineage with Conduktor Console', 'produced', 'k', YT('WvthWDaFYVE')],
        ['', 'Kafka Stream Lineage End to End', 'produced', 'k', DEMO('kafka-stream-lineage-end-to-end')],
        ['', 'Topic Views in Action', 'produced', 'k', YT('ZneYEUkB57Q')],
        ['', 'Configuration Templates Walkthrough', 'produced', 'k', YT('L9uq_qGaAzE')],
        ['', 'StarRocks quickstart demo in 5 minutes', 'produced', 'c', YT('h7F4U6xEA5M')],
        ['', 'Query Kafka Topics with SQL', 'produced', 'k', DEMO('query-your-kafka-topics-like-a-sql-database')],
        ['', 'Filter Kafka Messages with Live Tail', 'produced', 'k', DEMO('filter-kafka-messages-with-live-tail')],
        ['', 'Connector Templates in Action', 'produced', 'k', DEMO('connector-templates-in-action')],
        ['', 'Topic Templates in Action', 'produced', 'k', DEMO('topic-templates-in-action')],
        ['', 'Kafka Connect Resilience', 'produced', 'k', DEMO('how-conduktor-makes-kafka-connect-resilient')],
        ['', 'Kafka Insights: Risk, Cost, and Governance', 'produced', 'k', DEMO('kafka-insights-risk-cost-and-governance')],
        ['', 'Cluster Health and Access Control', 'produced', 'k', DEMO('kafka-cluster-health-and-access-control')],
        ['', 'Application Catalog and Ownership', 'produced', 'k', DEMO('application-catalog-and-ownership')],
        ['', 'Discover and Create Kafka Topics with Built-In Guardrails', 'produced', 'k', DEMO('discover-and-create-kafka-topics')],
        ['', 'Self-Service Topic Access Requests and Approvals', 'produced', 'k', DEMO('self-service-topic-access-requests-and-approvals')],
        ['', 'CelerData BYOC demo, part 1', 'produced', 'c', YT('_ZLYYPQlC5Q')],
        ['', 'CelerData BYOC demo, part 2', 'produced', 'c', YT('oG3UzLhOzuY')],
      ]},
      { name: 'explainers', rows: [
        ['', 'Why Is Effective Kafka Change Management So Tricky?', 'produced', 'k', DEMO('why-kafka-change-management-is-tricky')],
        ['', 'Why Configuration Templates?', 'produced', 'k', DEMO('why-configuration-templates')],
        ['', 'Why Topic Views?', 'produced', 'k', DEMO('why-topic-views')],
      ]},
    ],
  },
  {
    id: 'talks-and-workshops',
    blurb: 'On stage and on camera: conference talks, meetup talks and webinars.',
    partitions: [
      { name: 'talks', rows: [
        ['2026-11-05', 'Kafka as the Agent Action Log', 'spoke', 'k', 'files/kafka-as-the-agent-action-log.pdf', 'Lightning talk, Innovation Theater, Current San Francisco 2026. Link opens the slides.'],
        ['2025-11', 'Apache Iceberg Europe Community Meetup, Hamburg', 'spoke', 'c', 'https://www.youtube.com/live/zMucTXm7YPs?t=6759'],
        ['2025-11-04', 'Real-Time Customer-Facing Analytics: From Pain to Production', 'spoke', 'c', YT('wkzPOtCMtYY'), 'OSA Con 2025.'],
        ['2025-10-01', 'Iceberg REST Catalog', 'spoke', 'c', YT('OK7KHN5Mv7o'), 'Apache Iceberg Bay Area Meetup, San Francisco.'],
        ['2025-09-10', 'Building a Modern Portfolio Risk Application', 'spoke', 'c', YT('gK33qrF-O5I'), 'StarRocks Summit 2025.'],
        ['2025-07-24', 'Accelerating Iceberg Queries with Materialized Views', 'spoke', 'c', 'https://luma.com/vdbjh2fc', 'Apache Iceberg Meetup Atlanta, Snowflake office.'],
        ['2025-07-10', 'Low-Latency Apache Iceberg Queries with Materialized Views', 'spoke', 'c', YT('qD1jginZf1E'), 'NYC Apache Iceberg Community Meetup, AWS office.'],
        ['2025-10', 'Real-Time Customer-Facing Analytics', 'spoke', 'c', 'https://luma.com/wnsi90or', 'Open Source Analytics Festival, IBM Silicon Valley Lab.'],
        ['2025-10', 'Real-Time Data Lakes and AI Meetup, New York', 'spoke', 'c', 'https://luma.com/wbn6l47u', 'With ClickHouse.'],
      ]},
      { name: 'webinars', rows: [
        ['2026-09', "What's new at Conduktor: back to school roadmap webinar", 'hosted and spoke', 'k', YT('DUt82TjsIlI')],
        ['2026-07', 'Tales From Field Engineering, Ep. 1: Achieving FedRAMP High Without Re-platforming Kafka', 'hosted and spoke', 'k', YT('JUsQAD97tt8')],
        ['2025', 'A conversation with Apache Polaris PMC members', 'hosted and spoke', 'c', YT('YqCbgldrflY')],
        ['2025', 'Iceberg REST Catalog Security', 'hosted and spoke', 'c', YT('TKOp_AGRiWc')],
        ['2025', 'StarRocks release webinar', 'hosted and spoke', 'c', YT('3U1Y8CpJk50')],
      ]},
    ],
  },
  {
    id: 'community',
    blurb: 'Meetups organised, conferences worked and an interview series with people who run Kafka.',
    partitions: [
      { name: 'voices-of-the-kafka-community', rows: [
        ['2026-11', 'Kafka at EchoStar, with Akshara Madduluri and Shreshth Rathod', 'created, hosted', 'k', YT('s82kvdSLBhM')],
        ['2026-08', 'Optimizing Kafka Throughput at Human Security, with Adrian Woodhead', 'created, hosted', 'k', YT('HGHVShNh5cs')],
        ['2026-08', 'Data Lineage and Exactly-Once at Trayport, with Abubakar Zahid', 'created, hosted', 'k', YT('2aoO9Q1nKmM')],
        ['2026-08', 'Kafka Architecture and Its Limits at Fortum, with Jagadeesh Rajah', 'created, hosted', 'k', YT('KWUZJyvr_0Y')],
        ['2026-08', "Kafka's Role in AI Acceleration, and Open Formats at BNY, with Ash Goel", 'created, hosted', 'k', YT('BCYk91aszaE')],
        ['2026-08', "Kafka's Tricky Parts: Auth, Hot Topics, and Partitions, with Hugh Evans", 'created, hosted', 'k', YT('yTa3s4hGWro')],
        ['2026-07', 'Kafka, AI Agents, and Data Quality at LinkedIn, with Harshada Yesane', 'created, hosted', 'k', YT('IqJ_VKquXDc')],
        ['2026', 'Interview with Stephan Schiffner', 'created, hosted', 'k', YT('jkh3X5VoLvc')],
        ['2026', 'Interview with Vinzenz Halhammer', 'created, hosted', 'k', YT('sGvqFN7hoWw')],
      ]},
      { name: 'meetups-and-conferences', rows: [
        ['2026-11', 'Current San Francisco 2026', 'booth, happy hour', 'k', `${K}/current-san-francisco`],
        ['2026', 'AWS Summit New York', 'company presence', 'k', `${K}/aws-summit-nyc`],
        ['2026-06', 'Hot Topics: Kafka NYC Meetup', 'hosted', 'k', 'https://luma.com/endxppwz'],
        ['2026-05', 'Current London 2026', 'booth, interviews, happy hour host', 'k', 'https://luma.com/lfn5s1fn'],
        ['2025-11-19', 'Apache Iceberg Meetup North Carolina, Raleigh', 'hosted', 'c', 'https://luma.com/4vj17iue'],
        ['2025-11', 'Apache Iceberg Europe Community Meetup, Hamburg', 'hosted', 'c', 'https://luma.com/kdsh1zhc'],
        ['2025-10-23', 'Seattle Apache Iceberg Community Meetup', 'hosted', 'c', 'https://luma.com/byyyrlua', 'With Google and Microsoft.'],
        ['2025-10-01', 'Apache Iceberg Bay Area Meetup, San Francisco', 'hosted', 'c', 'https://luma.com/hbt7ahud', '700+ attendees.'],
        ['2025-09-10', 'StarRocks Summit 2025', 'hosted', 'c', YT('gK33qrF-O5I'), 'Company-wide digital summit.'],
        ['2025-07-24', 'Apache Iceberg Meetup Atlanta', 'hosted', 'c', 'https://luma.com/vdbjh2fc', 'At the Snowflake office.'],
        ['2025-07-10', 'NYC Apache Iceberg Community Meetup', 'co-hosted', 'c', 'https://luma.com/95a5qys1', 'At the AWS office, with ClickHouse among the co-hosts.'],
        ['2025-10', 'Real-Time Data Lakes and AI Meetup, New York', 'hosted', 'c', 'https://luma.com/wbn6l47u', 'With ClickHouse.'],
        ['2025-10', 'Open Source Analytics Festival, IBM Silicon Valley Lab', 'hosted', 'c', 'https://luma.com/wnsi90or'],
      ]},
    ],
  },
  {
    id: 'tools-and-automation',
    blurb: 'Software I built so a small marketing team could ship like a large one. Most of it is internal, so it is described here in words.',
    partitions: [
      { name: 'tools', rows: [
        ['2026-02', 'GTM hub', 'built, led', 'k', '', 'Internal site where sales and marketing find assets, plans and answers.'],
        ['2026-10', 'Video Studio', 'built', 'k', '', 'Turns a written brief into a short product video in the house style.'],
        ['2026-09', 'Blog autodraft', 'built', 'k', '', 'Drafts blog posts on a schedule and opens them for review.'],
        ['2026', 'Product demo library', 'built', 'k', `${K}/product-demos`, 'The demo section of conduktor.io. 23 of its demos are mine.'],
        ['2026-03', 'Kafka Assessment', 'wrote, built', 'k', `${K}/kafka-assessment`, 'A self-assessment that tells developers and platform teams where their Kafka practice stands.'],
        ['2026-07', 'ROI calculator', 'wrote, built', 'k', `${K}/pricing/roi`, 'Interactive calculator on the pricing page.'],
        ['2026', 'Console film toolkit', 'built', 'k', '', 'Scripts that turn product screens into short product films.'],
        ['2026-06', 'Gateway Community quickstart', 'built', 'k', 'https://github.com/conduktor/gateway-community-quickstart', 'A one-command Docker demo of Gateway.'],
        ['2026-08', 'GTM knowledge base', 'built', 'k', '', 'A shared reference for product names and use cases that the other tools read from.'],
      ]},
    ],
  },
];

// Gallery. Karaoke sits near the front on purpose.
export const gallery = [
  { src: 'mespeakingatcurrentsanfran.jpg', cap: 'Kafka as the Agent Action Log, Current San Francisco', date: '2026-11' },
  { src: 'talkatbayareameetup.jpg', cap: 'Iceberg REST Catalog talk, Bay Area meetup', date: '2025-10' },
  { src: 'nycfirstapacheicebergmeetupspeaking.jpg', cap: 'NYC Apache Iceberg meetup at the AWS office', date: '2025-07' },
  { src: 'attheboothcurentlondon.jpg', cap: 'At the Conduktor booth, Current London', date: '2026-05' },
  { src: 'interviewatcurrentlondon.jpg', cap: 'Recording Voices of the Kafka Community, Current London', date: '2026-05' },
  { src: 'hamburgmeetupspeaking.jpg', cap: 'Speaking in Hamburg', date: '2025-11' },
  { src: 'hamburgmeetuphosting.jpg', cap: 'Hosting the Hamburg Iceberg meetup', date: '2025-11' },
  { src: 'bayareameetupwithalexdremioandweimofrompuppygraphandawspms.jpg', cap: 'Bay Area meetup with speakers from Dremio, PuppyGraph and AWS', date: '2025-10' },
  { src: 'meinterviewingzachwilson.jpg', cap: 'Interviewing Zach Wilson, Bay Area meetup', date: '2025-10' },
  { src: 'bayareameetupvenue.jpg', cap: 'The Bay Area meetup venue', date: '2025-10' },
  { src: 'nycapacheoicebergmeetup2speaking.jpg', cap: 'Materialized views talk, NYC Iceberg meetup', date: '2025-07' },
  { src: 'interviewingpeopleatcurrentvoicesofcommunit.jpg', cap: 'Interviewing for Voices of the Kafka Community', date: '2026' },
  { src: 'snowflakemeetupatlantaspeaking.jpg', cap: 'Speaking at the Atlanta Iceberg meetup, Snowflake office', date: '2025-07' },
  { src: 'snowflakemeetupatlanta.jpg', cap: 'Atlanta Iceberg meetup', date: '2025-07' },
  { src: 'realtimedatalakesaimeetupspeaking.jpg', cap: 'Real-Time Data Lakes and AI meetup, New York', date: '2025-10' },
  { src: 'seattlemicrosoftmeetuphosting.jpg', cap: 'Hosting the Seattle Iceberg meetup', date: '2025-10' },
  { src: 'ibmresearchlabtalk.jpg', cap: 'Open Source Analytics Festival, IBM Silicon Valley Lab', date: '2025-10' },
  { src: 'ibmresearchlabtalk2.jpg', cap: 'Real-Time Customer-Facing Analytics, IBM Silicon Valley Lab', date: '2025-10' },
  { src: 'starrrockssummitcover.jpg', cap: 'StarRocks Summit 2025', date: '2025-09' },
  { src: 'realtimeaiandlakescoverimage.jpg', cap: 'OSA Con 2025 speaker card', date: '2025-11' },
];

// Display order, developer relations first
const ORDER = ['technical-writing', 'video-and-demos', 'talks-and-workshops', 'community', 'tools-and-automation', 'product-launches', 'positioning-and-messaging', 'customer-stories'];
topics.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));

// Curated order: strongest work first. Rows whose title starts with one of these move to the front, in this order.
function front(topicId, partName, starts) {
  const part = topics.find((t) => t.id === topicId).partitions.find((p) => p.name === partName);
  const picked = [];
  for (const s of starts) {
    const i = part.rows.findIndex((r) => r[1].startsWith(s));
    if (i === -1) throw new Error(`front(): no row starting with "${s}" in ${topicId}/${partName}`);
    picked.push(part.rows.splice(i, 1)[0]);
  }
  part.rows.unshift(...picked);
}
front('technical-writing', 'guides-and-whitepapers', ['The Kafka Debugging Playbook', 'Where Kafka Costs Hide']);
front('technical-writing', 'blog-posts', [
  'The Apache Kafka Security Playbook',
  'Kafka Failover Automates the Wrong Half',
  'Why Every Kafka Incident Ends with',
  'Kafka Is the Last Infrastructure Without a Hypervisor',
  'Kafka Has Rate Limits',
  'Stream Lineage Is Useless',
  'Kafka AI Agents Should Behave Like Kubernetes Controllers',
  'Houston, We Have 7 CLI Tools',
  'Why Copy a Kafka Topic Just to Filter It?',
  'Kafka Schema Registry: Open by Default',
  'Kafka Guardrails Gate',
  'Most Kafka Data Governance Tools Never Read a Record',
  'A Lag Graph Can',
  'Kafka Data Sharing Is a Boundary Decision',
  'Ground Control to On-Call',
  'Set Up a Kafka Platform with an AI Agent',
  'Kafka Teams Spend Too Much Time',
  'Who Should Get Kafka Consumer Lag Alerts?',
  'How to Approach Multi-Tenancy in Kafka',
  'How to Find the Producers and Consumers',
  'IBM Acquires Confluent',
  'What We Heard at Current San Francisco',
  'What We Learned at Current 2026',
  'Flink SQL Is Now in Conduktor Console',
]);
front('talks-and-workshops', 'talks', ['Kafka as the Agent Action Log', 'Iceberg REST Catalog', 'Low-Latency Apache Iceberg Queries', 'Real-Time Customer-Facing Analytics: From Pain', 'Building a Modern Portfolio Risk Application']);
front('talks-and-workshops', 'webinars', ['A conversation with Apache Polaris', 'Tales From Field Engineering', 'Iceberg REST Catalog Security']);
front('community', 'meetups-and-conferences', ['Apache Iceberg Bay Area Meetup', 'NYC Apache Iceberg Community Meetup', 'Current San Francisco 2026', 'Current London 2026', 'Hot Topics: Kafka NYC Meetup', 'Seattle Apache Iceberg', 'Apache Iceberg Europe', 'Apache Iceberg Meetup Atlanta']);
front('community', 'voices-of-the-kafka-community', ['Kafka, AI Agents, and Data Quality at LinkedIn', "Kafka's Role in AI Acceleration", 'Kafka at EchoStar']);
front('tools-and-automation', 'tools', ['GTM hub', 'Video Studio', 'Blog autodraft', 'Gateway Community quickstart', 'Kafka Assessment']);
front('product-launches', 'launches', ['Conduktor Agents', 'Gateway Community Edition', 'Console Team Edition', 'Stream Lineage', 'Schema Registry Proxy']);


// "Start here": a few picks per topic, matched by the start of the title
export const picks = {
  'technical-writing': ['The Kafka Debugging Playbook', 'The Apache Kafka Security Playbook', 'Kafka Failover Automates the Wrong Half', 'Kafka Has Rate Limits'],
  'video-and-demos': ['Kafka Stream Lineage End to End', 'Configuration Templates Walkthrough', 'StarRocks quickstart'],
  'talks-and-workshops': ['Kafka as the Agent Action Log', 'Iceberg REST Catalog', 'Low-Latency Apache Iceberg Queries'],
  'community': ['Apache Iceberg Bay Area Meetup', 'NYC Apache Iceberg Community Meetup', 'Kafka, AI Agents, and Data Quality at LinkedIn', "Kafka's Role in AI Acceleration"],
  'tools-and-automation': ['Gateway Community quickstart', 'Video Studio', 'Blog autodraft'],
  'product-launches': ['Conduktor Agents', 'Gateway Community Edition'],
  'positioning-and-messaging': ['Console product page', 'Gateway product page'],
  'customer-stories': ['Coinbase', 'German automaker'],
};
