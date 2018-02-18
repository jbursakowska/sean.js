create table user (
    id int serial not null,
    email_address varchar(100) not null,
    created_time timestamp default now(),
    updated_time timestamp,
    active boolean default true,
    primary key (id)
)

create table scope (
    id int serial not null,
    name varchar(100) not null,
    parent int,
    created_time timestamp default now(),
    updated_time timestamp,
    active boolean default true,
    primary key (id),
    foreign key (parent) references scope (id)
)

create table group (
    id ins serial not null,
    parent int,
    created_time timestamp default now(),
    updated_time timestamp,
    active boolean default true,
    primary key (id)
    foreign key (parent) references group (id)
)

create table group_scope (
    id int serial not null,
    group_id int,
    scope_id int,
    created_time timestamp default now(),
    updated_time timestamp,
    active boolean default true,
    primary key (id),
    foreign key (group_id) references group (id),
    foreign key (scope_id) references scope (id)
)

create table user_scope (
    id int serial not null,
    user_id int,
    scope_id int,
    created_time timestamp default now(),
    updated_time timestamp,
    active boolean default true,
    primary key (id),
    foreign key (user_id) references user (id),
    foreign key (scope_id) references scope (id)
)

create table user_group (
    id int serial not null,
    user_id int,
    group_id int,
    created_time timestamp default now(),
    updated_time timestamp,
    active boolean default true,
    primary key (id),
    foreign key (user_id) references user (id),
    foreign key (group_id) references group (id)
)
