#SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE("<table_name>", "<column_name>")), (SELECT MAX(<column_name>) FROM <table_name>) + 1, FALSE);

actualiza(){
for table in $(cat datos.sql | grep "CREATE SEQUENCE " | awk '{ print $6 }' | tr -d '\r' | sed 's/_id_seq;//g' | xargs )
do
    #echo "SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE(\"$table\", \"id\")), (SELECT MAX(\"id\") FROM "$table") + 1, FALSE);"
    echo "SELECT setval('"$table"_id_seq', COALESCE((SELECT MAX(id)+1 FROM $table), 1), false);"
done
}


actualiza > sequences.sql
cat sequences.sql

