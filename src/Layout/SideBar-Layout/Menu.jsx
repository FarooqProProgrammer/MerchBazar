import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package, Search } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'DashBoard',
        Items: [
            {
                title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Ecommerce', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/dashboard/project`, title: 'Project', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Widgets',
        Items: [
            {
                title: 'Widgets', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'General', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Project',
        Items: [
            {
                title: 'Project', icon: Box, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/project/projectlist`, title: 'Project list', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/project/createlist`, title: 'Create list', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'File Manager',
        Items: [
            { path: `${process.env.PUBLIC_URL}/filemanager`, bookmark: true, icon: GitPullRequest, title: 'File Manager', type: 'link' }
        ]
    },
    {
        menutitle: 'Kanban Board',
        Items: [
            { path: `${process.env.PUBLIC_URL}/kanbanboard`, icon: Monitor, title: 'Kanban Board', type: 'link' }
        ]
    },
    {
        menutitle: 'Ecommerce',
        Items: [
            {
                title: 'Ecommerce', icon: ShoppingBag, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/ecommerce/product`, title: 'Product', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/productpage`, title: 'Product Page', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/productlist`, title: 'Product List', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/paymentdetails`, title: 'Payment Detail', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/orderhistory`, title: 'Order History', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/invoice`, title: 'Invoice', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/cart`, title: 'Cart', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/wishlist`, title: 'Wishlist', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/checkout`, title: 'Checkout', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/pricing`, title: 'Pricing', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Email',
        Items: [
            {
                title: 'Email', icon: Mail, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/email/mailbox`, title: 'Mail Box', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/email/readmail`, title: 'Read Mail', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/email/compose`, title: 'Compose', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Chat',
        Items: [
            {
                title: 'Chat', icon: MessageCircle, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/chat/chatapp`, title: 'ChatApp', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/chat/videocall`, title: 'Video Call', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Users',
        Items: [
            {
                title: 'Users', icon: Users, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/users/userprofile`, title: 'User Profile', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/users/useredit`, title: 'User Edit', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/users/usercard`, title: 'User Cards', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Bookmarks',
        Items: [
            { path: `${process.env.PUBLIC_URL}/bookmarks`, icon: Heart, title: 'Bookmarks', type: 'link' }
        ]
    },
    {
        menutitle: 'Contacts',
        Items: [
            {
                title: 'Contacts', icon: List, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/contacts`, type: 'link', title: 'Contacts' },
                    { path: `${process.env.PUBLIC_URL}/contacts/firebase`, type: 'link', title: 'Contact FireBase' },
                ]
            }
        ]
    },
    {
        menutitle: 'Tasks',
        Items: [
            { path: `${process.env.PUBLIC_URL}/tasks`, bookmark: true, icon: CheckSquare, title: 'Tasks', type: 'link' }
        ]
    },
    {
        menutitle: 'Calender',
        Items: [
            {
                title: 'Calender', icon: Calendar, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/calandar/basic-calandar`, type: 'link', title: 'Calender' },
                    { path: `${process.env.PUBLIC_URL}/calandar/draggable-calandar`, type: 'link', title: 'Draggable' },
                ]
            }
        ]
    },
    {
        menutitle: 'Social App',
        Items: [
            { path: `${process.env.PUBLIC_URL}/social-app`, bookmark: true, icon: Zap, title: 'Social App', type: 'link' }
        ]
    },
    {
        menutitle: 'To-Do',
        Items: [
            {
                title: 'To-Do', icon: Clock, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/todo`, title: 'To-Do', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/todofirebase`, title: 'To-Do Firebase', type: 'link' }
                ]
            }
        ]
    },
    {
        menutitle: 'Search Result',
        Items: [
            { path: `${process.env.PUBLIC_URL}/searchresult`, icon: Search, title: 'Search Result', type: 'link' }
        ]
    },
    {
        menutitle: 'Forms',
        Items: [
            {
                title: 'Forms', icon: FileText, type: 'sub', active: false, children: [
                    {
                        title: ' Form Controls ', type: 'sub', children: [
                            { title: 'Form Validation', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/formValidation` },
                            { title: 'Basic Input', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/baseInput` },
                            { title: 'Checkbox & Radio', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/radioCheckbox` },
                            { title: 'Input Groups', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/inputGroup` },
                            { title: 'Mega Option', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/megaOptions` },

                        ]
                    },
                    {
                        title: 'Form Widgets', type: 'sub', children: [
                            { title: 'Date picker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/datepicker` },
                            { title: 'Typeahead', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/typeahead` },

                            { title: 'Date Time Picker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/datetimepicker` },
                            { title: 'Date Rangepicker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/rangepicker` },
                            { title: 'TouchSpin', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/touchspin` },
                            { title: 'Select 2', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/select2` },
                            { title: 'Switch', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/switch` },
                            { title: 'ClipBoard', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/clipBoard` },
                        ]
                    },
                    {
                        title: 'Form Layout', type: 'sub', children: [
                            { path: `${process.env.PUBLIC_URL}/form-layout/formDefault`, title: 'Form Default', type: 'link' },
                            { path: `${process.env.PUBLIC_URL}/form-layout/formWizard`, title: 'Form Wizard', type: 'link' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        menutitle: 'Tables',
        Items: [
            {
                title: 'Tables', icon: Server, type: 'sub', active: false, children: [
                    {
                        title: 'Reactstrap Tables', type: 'sub', active: false, children: [
                            { path: `${process.env.PUBLIC_URL}/tables/basictable`, title: 'Basic Tables', type: 'link' },
                            { path: `${process.env.PUBLIC_URL}/tables/sizingtable`, title: 'Sizing Tables', type: 'link' },
                            { path: `${process.env.PUBLIC_URL}/tables/bordertable`, title: 'Border Tables', type: 'link' },
                            { path: `${process.env.PUBLIC_URL}/tables/stylingtable`, title: 'Styling Tables', type: 'link' },
                        ]
                    },
                    { path: `${process.env.PUBLIC_URL}/tables/datatable`, title: 'Data Tables', type: 'link' },
                ]
            },
        ]
    },

    {
        menutitle: 'Ui-Kits',
        Items: [
            {
                title: 'Ui-Kits', icon: Box, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/ui-kits/typography`, title: 'Typography', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/avatar`, title: 'Avatars', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/helperclass`, title: 'Helper-Classes  ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/grid`, title: 'Grid', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/tagsandpills`, title: 'Tag & Pills', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/progress-bar`, title: 'Progress', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/modal`, title: 'Modal', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/alert`, title: 'Alert', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/popover`, title: 'Popover', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/tooltips`, title: 'Tooltip', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/spinner`, title: 'Spinners', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/dropdown`, title: 'Dropdown ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/accordion`, title: 'Accordion', type: 'link' },
                    {
                        title: 'Tabs', type: 'sub', children: [
                            { title: 'Bootstrap Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap` },
                            { title: 'Line Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tab-line` },
                        ]
                    },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/shadow`, title: 'Shadow', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/list`, title: 'List', type: 'link' },
                ]
            }
        ]
    },
    {
        menutitle: 'Bonus Ui',
        Items: [
            {
                title: 'Bonus Ui', icon: FolderPlus, type: 'sub', badge1: true, active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, title: 'Scrollable ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`, title: 'Bootstrap Notify ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/treeview`, title: 'Tree View', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/step`, title: 'Step', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/rating`, title: 'Rating', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`, title: 'Dropzone', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/tourComponent`, title: 'Tour ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/sweetAlert`, title: 'SweetAlert ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/carousel`, title: 'Owl Carousel', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`, title: 'Ribbons', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`, title: 'Pagination', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`, title: 'Breadcrumb ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`, title: 'Range Slider ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`, title: 'Image Cropper ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`, title: 'Sticky ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`, title: 'Drag and Drop ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`, title: 'Upload', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`, title: 'Basic Card ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/card/creativeCards`, title: 'Creative Card ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/card/tabCard`, title: 'Tabbed Card ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`, title: 'Draggable Card', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`, title: 'Timeline', type: 'link' }
                ]
            },
        ]
    },
    {
        menutitle: 'Icons',
        Items: [
            {
                title: 'Icons', icon: Command, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/icons/flagicon`, title: 'Flag Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/fontawesome`, title: 'Font Awesome', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/ico`, title: 'Ico Icons', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/thimify`, title: 'Themify Icons', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/feather`, title: 'Feather Icons', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/wheater`, title: 'Wheater Icons', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Buttons',
        Items: [
            {
                title: 'Buttons', icon: Cloud, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/buttons/default-style`, bookmark: true, title: 'Default Style ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/buttons/flat-style`, title: 'Flat Style ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/buttons/edge-style`, title: 'Edge Style ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/buttons/raised-style`, title: ' Raised Style', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/buttons/button-group `, title: 'Button Group ', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Charts',
        Items: [
            {
                title: 'Charts', icon: BarChart, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/charts/apex`, title: 'Apex Charts ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/charts/google`, title: 'Google Charts', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/charts/chartist`, title: 'Chartist Charts', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/charts/chartjs`, title: 'ChartJs Charts', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Sample Page',
        Items: [
            { path: `${process.env.PUBLIC_URL}/sample-page`, icon: FileText, title: 'Sample Page', type: 'link' }
        ]
    },
    {
        menutitle: 'Others',
        Items: [
            {
                title: 'Others', icon: Layers, type: 'sub', active: false, children: [
                    {
                        title: 'Coming Soon', type: 'sub', children: [
                            { title: 'Coming Sample', type: 'link', path: `${process.env.PUBLIC_URL}/pages/coming/comingsimple` },
                            { title: 'Coming with Bg-video', type: 'link', path: `${process.env.PUBLIC_URL}/pages/coming/comingbgvideo` },
                            { title: 'Coming with Bg-Image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/coming/comingbgimage` },
                        ]
                    },
                    {
                        title: 'Authentication', type: 'sub', children: [
                            { title: 'Login Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-simple` },
                            { title: 'Login With bg image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-img` },
                            { title: 'Login with image two', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-bg-img` },
                            { title: 'Login with validation', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-validation` },
                            { title: 'Login with tooltip', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-tooltip` },
                            { title: 'Login with sweetaleart', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-sweetalert` },
                            { title: 'Register Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/register-simpleimg` },
                            { title: 'Register with Bg image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/register-bg-img` },
                            { title: 'Register with Bg Video', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/register-video` },
                            { title: 'Unlock User', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/unlock-user` },
                            { title: 'Forgot Password', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/forget-pwd` },
                            { title: 'Create Passward', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/create-pwd` },
                            { title: 'Maintenance', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/maintenance` },
                        ]
                    },
                    {
                        title: 'Error', type: 'sub', children: [
                            { title: 'Error Page 1', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page1` },
                            { title: 'Error Page 2', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page2` },
                            { title: 'Error Page 3', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page3` },
                            { title: 'Error Page 4', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page4` },
                        ]
                    },
                ]
            },
        ]
    },
    {
        menutitle: 'Gallery',
        Items: [
            {
                title: 'Gallery', icon: Image, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/gallery/imageGallery`, title: 'Gallery Grid ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/gallery/imageWithDesc`, title: 'Gallery Grid  Desc ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/gallery/mesonryGallery`, title: 'Masonry Gallery', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/gallery/mesonryDesc`, title: 'Masonry With Desc', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/gallery/imageHover`, title: 'Hover Effect', type: 'link' }
                ]
            },
        ]
    },
    {
        menutitle: 'Blog',
        Items: [
            {
                title: 'Blog', icon: Film, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/blog/blogdetail`, title: 'Blog Details', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/blog/blogsingle`, title: 'Blog Single', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/blog/blogpost`, title: 'Add Post', type: 'link' },
                ]
            }
        ]
    },
    {
        menutitle: 'FAQ',
        Items: [
            { path: `${process.env.PUBLIC_URL}/faq`, icon: HelpCircle, title: 'FAQ', type: 'link' }
        ]
    },
    {
        Items: [
            {
                title: 'Job Search', icon: Package, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/jobSearch/cardView`, title: 'Cards View', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/jobSearch/job-list`, title: 'List View', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/jobSearch/job-detail`, title: 'Job Details', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/jobSearch/job-apply`, title: 'Apply', type: 'link' }
                ]
            }
        ]
    },
    {
        Items: [
            {
                title: 'Learning', icon: Radio, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/learning/learning-list`, title: 'Learning List', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/learning/learning-detail`, title: 'Detail Course', type: 'link' },
                ]
            },
        ]
    },
    {
        Items: [
            {
                title: 'Maps', icon: Map, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/mapsjs`, type: 'link', title: 'Maps Js' },
                ]
            },
        ]
    },
    {
        Items: [
            {
                title: 'Editor', icon: Edit, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/editor/ckEditor`, type: 'link', title: 'CK  Editor' },
                    { path: `${process.env.PUBLIC_URL}/editor/mdeEditor`, type: 'link', title: 'MDE Editor' },
                    { path: `${process.env.PUBLIC_URL}/editor/ace-code-editor`, type: 'link', title: 'ACE code Editor ' },
                ]
            },
        ]
    },
    {
        Items: [
            {
                title: 'Knowledgebase', icon: Sunrise, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/knowledgebase`, type: 'link', title: 'Knowledgebase' },
                    { path: `${process.env.PUBLIC_URL}/knowledgebase/knowledge-category`, type: 'link', title: 'Knowledge Category' },
                    { path: `${process.env.PUBLIC_URL}/knowledgebase/knowledge-details`, type: 'link', title: 'Knowledge details' },
                ]
            },
        ]
    },
    {
        menutitle: 'Support Ticket',
        Items: [
            { path: `${process.env.PUBLIC_URL}/support-ticket`, icon: Users, type: 'link', active: false, title: 'Support Ticket' },
        ]
    },
];