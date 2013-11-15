# Student Site

1. Bundle gems

```
bundle
```

2. Seed the db

```
rake db:seed
```

3. Run Rackup 

```
rackup
```

You should now have the site running on localhost:9292

## Sorting

You can sort by any existing property, asc or desc, you can also sort by a
special property, 'quote_length.'

```
/students/?sort_by=name
```

```
/students/?sort_by=quote_length
```

```
/students/?sort_by=name&order=desc
```

```
/students/?order=desc
```